/**
 * Alle inhoud die op meer dan één plek voorkomt: modules, prijzen, bedrijfsgegevens.
 * Prijzen zijn VOORBEELDWAARDEN tot Mustafa ze heeft vastgesteld.
 */
export const SITE = {
  naam: 'CoPortaal',
  slogan: 'Praktijkbeheer voor administratie- en belastingadvieskantoren',
  url: 'https://coportaal.nl',
  demoUrl: 'https://demo.coportaal.nl',
  email: 'info@coportaal.nl',
  // Nog in te vullen: KvK, adres, telefoon van de aanbieder.
};

export type ModuleSlug = 'kyc' | 'facturatie' | 'loon';

export interface ModuleInfo {
  slug: ModuleSlug;
  naam: string;
  kop: string;            // één zin die de waarde zegt
  intro: string;          // alinea
  punten: string[];       // wat zit erin
  probleem: string;       // welk probleem lost het op
  prijs: number;          // per maand, voorbeeld
  video?: string;         // YouTube/Vimeo-URL, later
}

export const BASIS = {
  naam: 'CoPortaal Basis',
  kop: 'Alles wat een kantoor dagelijks nodig heeft, op één plek.',
  prijs: 79,
  gebruikersInbegrepen: 3,
  prijsPerExtraGebruiker: 12,
  punten: [
    'Klantenbeheer met automatische KvK- en btw-nummercontrole',
    'Workflow per klant: IB, VPB, jaarrekening en btw-aangiften in één overzicht',
    'Taken toewijzen, delegeren en ter controle aanbieden',
    'Teamrooster en wie er vandaag is',
    'Kennisbank en documenten per klant',
    'Digitaal aanmeldformulier en digitaal ondertekenen van de opdrachtovereenkomst',
    'Dashboard met deadlines en voortgang, zonder cijfers die niet voor iedereen zijn',
  ],
};

export const MODULES: ModuleInfo[] = [
  {
    slug: 'kyc',
    naam: 'KYC',
    kop: 'Wwft-identificatie die uw klant zelf op zijn telefoon afrondt.',
    intro:
      'U stuurt één link. De klant fotografeert zijn identiteitsbewijs en maakt een selfie; het BSN wordt automatisch afgeschermd. U controleert de herkende gegevens, klikt op akkoord en het dossier is compleet, inclusief bewijs van het moment van verificatie.',
    punten: [
      'Verzoek per e-mail of sms, geldig tot een datum die u kiest',
      'Automatische herinneringen en hercontrole op de termijn die u instelt',
      'Automatische afscherming van het BSN; originelen worden na controle verwijderd',
      'Dossier-pdf per klant voor uw Wwft-administratie',
      'Overzicht van alles wat nog bij klanten ligt',
    ],
    probleem: 'Kopieën van paspoorten in mappen en mailboxen, geen vast moment van hercontrole en geen bewijs als de toezichthouder langskomt.',
    prijs: 29,
  },
  {
    slug: 'facturatie',
    naam: 'Facturatie',
    kop: 'Factureren, incasseren en aanmanen zonder er elke maand achteraan te lopen.',
    intro:
      'Facturen en offertes in uw huisstijl, periodieke facturatie die zichzelf verstuurt, automatische incasso via Mollie en een debiteurenproces met herinnering, aanmaning en 14-dagenbrief. Klanten die structureel niet betalen ziet u in één lijst, met de vervolgstappen onder de rechtermuisknop.',
    punten: [
      'Facturen en offertes met digitale acceptatie',
      'Periodieke facturatie per klant, maand of kwartaal',
      'SEPA-incasso via Mollie, met mandaat dat de klant zelf afgeeft',
      'Herinnering, aanmaning en 14-dagenbrief met wettelijke incassokosten',
      'Dubieuze debiteuren: waarschuwing, werk opschorten, overdracht aan incassobureau',
    ],
    probleem: 'Openstaande posten die niemand bijhoudt, en uren per maand aan handmatig factureren en nabellen.',
    prijs: 49,
  },
  {
    slug: 'loon',
    naam: 'Loon',
    kop: 'Elke maand in één oogopslag welke werkgever nog wacht.',
    intro:
      'Per werkgever ziet u of de uren binnen zijn, of er is verloond, of de aangifte is gedaan en of de stukken zijn verstuurd. Loonheffingsverklaringen en arbeidsovereenkomsten laat u digitaal ondertekenen, en contractwijzigingen gaan op de ingangsdatum vanzelf in.',
    punten: [
      'Maandoverzicht per werkgever met snelfilters: uren, verloning, aangifte, verzonden',
      'Loonheffingsverklaring digitaal invullen en laten ondertekenen',
      'Arbeidsovereenkomst uploaden; de gegevens worden automatisch gelezen',
      'Contractwijzigingen met ingangsdatum en ondertekening door werkgever en werknemer',
      'Loonstukken per e-mail naar de werkgever',
    ],
    probleem: 'Excel-lijstjes per maand en zoeken in mailboxen naar wie nog een verklaring moet tekenen.',
    prijs: 59,
  },
];

export const ALL = { naam: 'CoPortaal ALL', prijs: 189, omschrijving: 'Basis en alle modules, één vaste prijs.' };
export const INRICHTING = { prijs: 495, omschrijving: 'Eenmalig: uw omgeving inrichten, klanten importeren en een uur uitleg.' };
