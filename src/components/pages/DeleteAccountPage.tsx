import { useEffect } from 'react';

const CONTACT_EMAIL = 'contato@appsonoriza.com.br';

function updateMetaTag(name: string, content: string) {
  const tag = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
  if (tag) {
    tag.setAttribute('content', content);
  }
}

function updateMetaProperty(property: string, content: string) {
  const tag = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);
  if (tag) {
    tag.setAttribute('content', content);
  }
}

type PageSection = {
  localeTag: string;
  title: string;
  lead: string;
  requestTitle: string;
  requestItems: readonly string[];
  workflowTitle: string;
  workflowItems: readonly string[];
  deletedTitle: string;
  deletedItems: readonly string[];
  retainedTitle: string;
  retainedItems: readonly string[];
  officialTitle: string;
  officialIntro: string;
  appLine: string;
  responsibleLine: string;
  processingLine: string;
  privacyLine: string;
};

const sections: readonly PageSection[] = [
  {
    localeTag: 'Português',
    title: 'Exclusão de conta do Sonoriza',
    lead:
      'Esta é a página pública do Sonoriza para solicitações de exclusão de conta fora do app. Quando uma solicitação válida é recebida, o acesso à conta pode ser desativado imediatamente para iniciar o fluxo de exclusão ou anonimização dos dados pessoais associados, observadas as retenções mínimas necessárias para segurança, prevenção a fraude, obrigações legais/regulatórias e defesa de direitos.',
    requestTitle: 'Como solicitar',
    requestItems: [
      'Envie um e-mail para contato@appsonoriza.com.br com o assunto "Solicitação de exclusão de conta - Sonoriza".',
      'Use, de preferência, o e-mail vinculado à conta ou informe claramente qual é o e-mail cadastrado no app.',
      'Inclua nome da conta e qualquer detalhe que ajude a localizar o cadastro com segurança.',
      'Se necessário, o Sonoriza pode pedir confirmação adicional para evitar fraude, abuso ou exclusão indevida.',
    ],
    workflowTitle: 'O que acontece com a conta',
    workflowItems: [
      'O acesso normal à conta pode ser interrompido para impedir uso posterior enquanto a solicitação é tratada.',
      'Os dados pessoais associados entram em fluxo de exclusão, anonimização ou restrição de acesso, conforme a natureza do dado e a base legal aplicável.',
      'Dependendo da arquitetura da plataforma, um identificador técnico mínimo ou marcação de status pode ser mantido em ambiente restrito para evitar reativação automática indevida, duplicidade, abuso ou fraude.',
    ],
    deletedTitle: 'Dados excluídos ou anonimizados',
    deletedItems: [
      'Dados de cadastro e identificação vinculados à conta do Sonoriza, quando não houver retenção legítima aplicável.',
      'Preferências, favoritos, histórico e configurações associadas ao perfil do usuário.',
      'Dados de uso diretamente relacionados à conta que possam ser excluídos ou anonimizados com segurança.',
      'Outros dados pessoais vinculados à conta, conforme viabilidade técnica e requisitos legais aplicáveis.',
    ],
    retainedTitle: 'Dados que podem ser mantidos',
    retainedItems: [
      'Registros mínimos necessários para cumprimento de obrigações legais, regulatórias ou judiciais.',
      'Logs e informações de segurança usados para prevenção a fraude, abuso, investigação de incidentes e proteção da plataforma.',
      'Dados mínimos necessários para auditoria, defesa de direitos, resolução de disputas ou preservação da integridade do serviço.',
    ],
    officialTitle: 'Canal oficial',
    officialIntro: 'Solicitações de exclusão de conta e dúvidas relacionadas à privacidade devem ser enviadas para:',
    appLine: 'App: Sonoriza',
    responsibleLine: 'Responsável: Joseilton Ferreira Junior',
    processingLine: 'Prazo estimado de processamento: até 30 dias corridos após a confirmação da titularidade da conta.',
    privacyLine: 'Esta página complementa, mas não substitui, o caminho de exclusão que também deve existir dentro do app.',
  },
  {
    localeTag: 'English',
    title: 'Sonoriza Account Deletion',
    lead:
      "This is Sonoriza's public page for account deletion requests outside the app. When a valid request is received, account access may be deactivated immediately to start the deletion or anonymization flow for the related personal data, subject to the minimum retention required for security, fraud prevention, legal/regulatory obligations, and defense of rights.",
    requestTitle: 'How to request deletion',
    requestItems: [
      'Send an email to contato@appsonoriza.com.br with the subject "Account deletion request - Sonoriza".',
      'Preferably use the email address linked to the account, or clearly state which email is registered in the app.',
      'Include the account name and any detail that helps locate the record safely.',
      'If necessary, Sonoriza may request additional confirmation to prevent fraud, abuse, or wrongful deletion.',
    ],
    workflowTitle: 'What happens to the account',
    workflowItems: [
      'Normal account access may be interrupted to prevent further use while the request is being processed.',
      'Related personal data enters a deletion, anonymization, or restricted-access workflow, depending on the nature of the data and the applicable legal basis.',
      'Depending on the platform architecture, a minimal technical identifier or status marker may be retained in a restricted environment to prevent improper automatic reactivation, duplication, abuse, or fraud.',
    ],
    deletedTitle: 'Data deleted or anonymized',
    deletedItems: [
      'Account registration and identification data linked to the Sonoriza account, when no legitimate retention obligation applies.',
      'Preferences, favorites, history, and settings associated with the user profile.',
      'Account-related usage data that can be safely deleted or anonymized.',
      'Other personal data linked to the account, subject to technical feasibility and applicable legal requirements.',
    ],
    retainedTitle: 'Data that may be retained',
    retainedItems: [
      'Minimum records necessary to comply with legal, regulatory, or judicial obligations.',
      'Security logs and information used for fraud prevention, abuse prevention, incident investigation, and platform protection.',
      'Minimum data required for audits, legal defense, dispute resolution, or service integrity preservation.',
    ],
    officialTitle: 'Official channel',
    officialIntro: 'Account deletion requests and privacy-related questions should be sent to:',
    appLine: 'App: Sonoriza',
    responsibleLine: 'Responsible party: Joseilton Ferreira Junior',
    processingLine: 'Estimated processing time: up to 30 calendar days after account ownership verification.',
    privacyLine: 'This page complements, but does not replace, the account deletion path that should also exist inside the app.',
  },
] as const;

function renderEmailLine(textBefore: string) {
  return (
    <p>
      {textBefore}{' '}
      <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
    </p>
  );
}

export function DeleteAccountPage() {
  useEffect(() => {
    document.documentElement.lang = 'pt-BR';
    document.title = 'Sonoriza | Exclusão de conta / Account deletion';

    const description =
      'Página oficial do Sonoriza para solicitação de exclusão de conta fora do app. Official Sonoriza page for account deletion requests outside the app.';

    updateMetaTag('description', description);
    updateMetaTag('author', 'Joseilton Junior');
    updateMetaTag('twitter:title', 'Sonoriza | Exclusão de conta / Account deletion');
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', 'https://seja.appsonoriza.com.br/assets/social/sonoriza-share.png');

    updateMetaProperty('og:locale', 'pt_BR');
    updateMetaProperty('og:title', 'Sonoriza | Exclusão de conta / Account deletion');
    updateMetaProperty('og:description', description);
    updateMetaProperty('og:url', 'https://seja.appsonoriza.com.br/delete-account');
    updateMetaProperty('og:image', 'https://seja.appsonoriza.com.br/assets/social/sonoriza-share.png');
    updateMetaProperty('og:image:alt', 'Identidade visual do Sonoriza');
    updateMetaProperty('og:image:type', 'image/png');
    updateMetaProperty('og:image:width', '1080');
    updateMetaProperty('og:image:height', '1080');
  }, []);

  return (
    <main className="delete-account-page">
      <div className="delete-account-shell">
        <a className="delete-account-brand" href="/">
          Sonoriza
        </a>

        <div className="delete-account-eyebrow">Sonoriza / Account Deletion / Exclusão de Conta</div>
        <h1 className="delete-account-title">Exclusão de conta do Sonoriza</h1>
        <p className="delete-account-lead">
          Página pública para solicitações de exclusão de conta fora do app.
          <br />
          Public page for account deletion requests outside the app.
        </p>

        <div className="delete-account-actions">
          <a
            className="delete-account-button"
            href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Solicitação de exclusão de conta - Sonoriza / Account deletion request - Sonoriza')}`}
          >
            Solicitar por e-mail / Request by email
          </a>
          <a className="delete-account-button is-secondary" href="/">
            Voltar para a landing / Back to landing
          </a>
        </div>

        {sections.map((section) => (
          <section className="delete-account-section" key={section.localeTag}>
            <div className="delete-account-section-head">
              <div className="delete-account-section-tag">{section.localeTag}</div>
              <h2 className="delete-account-section-title">{section.title}</h2>
              <p className="delete-account-section-lead">{section.lead}</p>
            </div>

            <div className="delete-account-grid">
              <article className="delete-account-card">
                <h3>{section.requestTitle}</h3>
                <ol>
                  {section.requestItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </article>

              <article className="delete-account-card">
                <h3>{section.workflowTitle}</h3>
                <ul>
                  {section.workflowItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="delete-account-card">
                <h3>{section.deletedTitle}</h3>
                <ul>
                  {section.deletedItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="delete-account-card">
                <h3>{section.retainedTitle}</h3>
                <ul>
                  {section.retainedItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>

              <article className="delete-account-card is-full">
                <h3>{section.officialTitle}</h3>
                <p>{section.officialIntro}</p>
                {renderEmailLine(section.localeTag === 'Português' ? 'E-mail:' : 'Email:')}
                <p>{section.appLine}</p>
                <p>{section.responsibleLine}</p>
                <div className="delete-account-highlight">{section.processingLine}</div>
                <p className="delete-account-footnote">{section.privacyLine}</p>
              </article>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
