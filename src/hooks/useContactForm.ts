import { useMemo, useState, type ChangeEvent, type FormEvent } from 'react';

import type { Locale } from '../i18n';
import type { Messages } from '../i18n/translations/pt-BR';

type FieldKey = 'name' | 'phone' | 'email' | 'reason' | 'message';
type FormValues = Record<FieldKey, string>;
type FormErrors = Partial<Record<FieldKey, string>>;

type ValidationIssue = {
  code?: string;
  origin?: string;
  minimum?: number;
  maximum?: number;
  path?: unknown;
};

const CONTACTS_API_URL = 'https://api.appsonoriza.com.br/contacts';

const INITIAL_VALUES: FormValues = {
  name: '',
  phone: '',
  email: '',
  reason: '',
  message: '',
};

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, '').slice(0, 11);

  if (digits.length <= 2) {
    return digits ? `(${digits}` : '';
  }

  if (digits.length <= 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }

  if (digits.length <= 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getFieldKey(path: unknown): FieldKey | null {
  const fieldKey = Array.isArray(path) ? path[0] : path;
  return typeof fieldKey === 'string' &&
    ['name', 'phone', 'email', 'reason', 'message'].includes(fieldKey)
    ? (fieldKey as FieldKey)
    : null;
}

function humanizeValidationIssue(
  issue: ValidationIssue,
  locale: Locale,
  fieldLabels: Messages['contact']['form']['fieldLabels'],
) {
  const field = getFieldKey(issue.path);
  const fieldLabel = field
    ? fieldLabels[field]
    : locale === 'pt-BR'
      ? 'campo'
      : 'field';

  if (issue.code === 'too_small') {
    if (issue.origin === 'string' && typeof issue.minimum === 'number') {
      return locale === 'pt-BR'
        ? `O campo ${fieldLabel} precisa ter pelo menos ${issue.minimum} caracteres.`
        : `The ${fieldLabel} field must have at least ${issue.minimum} characters.`;
    }

    if (typeof issue.minimum === 'number') {
      return locale === 'pt-BR'
        ? `O campo ${fieldLabel} precisa ter pelo menos ${issue.minimum} item(ns).`
        : `The ${fieldLabel} field must have at least ${issue.minimum} item(s).`;
    }
  }

  if (issue.code === 'too_big' && typeof issue.maximum === 'number') {
    return locale === 'pt-BR'
      ? `O campo ${fieldLabel} pode ter no máximo ${issue.maximum} caracteres.`
      : `The ${fieldLabel} field can have at most ${issue.maximum} characters.`;
  }

  if (issue.code === 'invalid_format' || issue.code === 'invalid_string') {
    return field === 'email'
      ? locale === 'pt-BR'
        ? 'Digite um e-mail válido.'
        : 'Enter a valid email.'
      : locale === 'pt-BR'
        ? `O campo ${fieldLabel} é inválido.`
        : `The ${fieldLabel} field is invalid.`;
  }

  if (issue.code === 'invalid_type') {
    return locale === 'pt-BR'
      ? `O campo ${fieldLabel} é inválido.`
      : `The ${fieldLabel} field is invalid.`;
  }

  return locale === 'pt-BR' ? `Verifique o campo ${fieldLabel}.` : `Check the ${fieldLabel} field.`;
}

export function useContactForm(messages: Messages['contact'], locale: Locale) {
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [globalError, setGlobalError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const fieldLabels = messages.form.fieldLabels;
  const formErrors = messages.form.errors;

  const helpers = useMemo(
    () => ({
      resetFieldError: (field: FieldKey) => {
        setErrors((previousErrors) => {
          if (!previousErrors[field]) {
            return previousErrors;
          }

          const nextErrors = { ...previousErrors };
          delete nextErrors[field];
          return nextErrors;
        });
      },
      focusField: (field: FieldKey) => {
        const element = document.getElementById(field) as
          | HTMLInputElement
          | HTMLTextAreaElement
          | HTMLSelectElement
          | null;
        element?.focus();
      },
    }),
    [],
  );

  const handleChange =
    (field: FieldKey) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const nextValue = field === 'phone' ? formatPhone(event.target.value) : event.target.value;

      setValues((previousValues) => ({
        ...previousValues,
        [field]: nextValue,
      }));

      helpers.resetFieldError(field);
      setGlobalError('');
    };

  const validate = () => {
    const nextErrors: FormErrors = {};
    const sanitizedPhone = values.phone.replace(/\D/g, '');

    if (!values.name.trim()) {
      nextErrors.name = formErrors.requiredName;
    }

    if (!sanitizedPhone) {
      nextErrors.phone = formErrors.requiredPhone;
    } else if (sanitizedPhone.length < 10 || sanitizedPhone.length > 11) {
      nextErrors.phone = formErrors.invalidPhone;
    }

    if (!values.email.trim()) {
      nextErrors.email = formErrors.requiredEmail;
    } else if (!isValidEmail(values.email.trim())) {
      nextErrors.email = formErrors.invalidEmail;
    }

    if (!values.reason) {
      nextErrors.reason = formErrors.requiredReason;
    }

    if (!values.message.trim()) {
      nextErrors.message = formErrors.requiredMessage;
    } else if (values.message.trim().length < 10) {
      nextErrors.message = formErrors.minMessage;
    }

    return nextErrors;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setErrors({});
    setGlobalError('');

    const nextErrors = validate();

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      helpers.focusField(Object.keys(nextErrors)[0] as FieldKey);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(CONTACTS_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phone.replace(/\D/g, ''),
          reason: values.reason,
          message: values.message.trim(),
        }),
      });

      if (!response.ok) {
        let field: FieldKey | null = null;
        let message: string = formErrors.submitFallback;

        try {
          const data = await response.json();
          const details = data?.errors?.details;

          if (Array.isArray(details) && details.length > 0) {
            const issue = details[0] as ValidationIssue;
            field = getFieldKey(issue.path);
            message = humanizeValidationIssue(issue, locale, fieldLabels);
          } else if (
            typeof data?.message === 'string' &&
            data.message.trim() &&
            data.message !== 'Validation failed'
          ) {
            message = data.message.trim();
          }
        } catch {
          message = formErrors.submitFallback;
        }

        if (field) {
          setErrors({ [field]: message });
          helpers.focusField(field);
        } else {
          setGlobalError(message);
        }

        return;
      }

      setIsSent(true);
      setValues(INITIAL_VALUES);
    } catch {
      setGlobalError(formErrors.submitFallback);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    globalError,
    isSubmitting,
    isSent,
    handleChange,
    handleSubmit,
  };
}
