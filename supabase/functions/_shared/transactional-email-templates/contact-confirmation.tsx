import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Relanova'
const TAGLINE = 'Human Touch in a Connected World'

interface ContactConfirmationProps {
  name?: string
  message?: string
}

const ContactConfirmationEmail = ({ name, message }: ContactConfirmationProps) => (
  <Html lang="nl" dir="ltr">
    <Head />
    <Preview>Bedankt voor uw bericht — we nemen binnen 24 uur contact met u op</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header}>
          <Text style={brand}>{SITE_NAME}</Text>
          <Text style={tagline}>{TAGLINE}</Text>
        </Section>

        <Heading style={h1}>
          {name ? `Bedankt, ${name}!` : 'Bedankt voor uw bericht!'}
        </Heading>

        <Text style={text}>
          Ik heb uw bericht goed ontvangen. U mag binnen <strong>24 uur</strong> een
          persoonlijk antwoord van mij verwachten.
        </Text>

        <Text style={text}>
          Voor dringende zaken kan u me ook bereiken via WhatsApp of telefoon op{' '}
          <strong>+32 488 285 886</strong>.
        </Text>

        {message ? (
          <Section style={messageBox}>
            <Text style={messageLabel}>Uw bericht:</Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        ) : null}

        <Text style={signature}>
          Hartelijke groet,<br />
          <strong>Monia Ben Tahar</strong><br />
          Ecosystem Architect — Relanova
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactConfirmationEmail,
  subject: 'Bedankt voor uw bericht — Relanova',
  displayName: 'Contact bevestiging (visitor)',
  previewData: { name: 'Jan', message: 'Ik wil graag een gratis strategiegesprek inplannen.' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '560px', margin: '0 auto' }
const header = { borderBottom: '2px solid #1B2A4A', paddingBottom: '16px', marginBottom: '24px' }
const brand = { fontSize: '22px', fontWeight: 'bold', color: '#1B2A4A', margin: '0' }
const tagline = { fontSize: '11px', color: '#2A7B88', textTransform: 'uppercase' as const, letterSpacing: '2px', margin: '4px 0 0' }
const h1 = { fontSize: '24px', fontWeight: 'bold', color: '#1B2A4A', margin: '0 0 20px' }
const text = { fontSize: '15px', color: '#333333', lineHeight: '1.6', margin: '0 0 16px' }
const messageBox = { backgroundColor: '#f5f7fa', borderLeft: '3px solid #2A7B88', padding: '16px 18px', margin: '20px 0', borderRadius: '4px' }
const messageLabel = { fontSize: '12px', color: '#666666', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '0 0 6px' }
const messageText = { fontSize: '14px', color: '#333333', lineHeight: '1.5', margin: '0', fontStyle: 'italic' as const }
const signature = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '32px 0 0' }
