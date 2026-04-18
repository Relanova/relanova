import * as React from 'npm:react@18.3.1'
import {
  Body, Container, Head, Heading, Html, Preview, Row, Column, Section, Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

interface ContactNotificationProps {
  name?: string
  email?: string
  phone?: string
  company?: string
  service?: string
  message?: string
}

const ContactNotificationEmail = ({
  name, email, phone, company, service, message,
}: ContactNotificationProps) => (
  <Html lang="nl" dir="ltr">
    <Head />
    <Preview>Nieuw contactformulier — {name || 'onbekend'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>📬 Nieuw bericht via relanova.be</Heading>
        <Text style={subtitle}>Iemand heeft het contactformulier ingevuld.</Text>

        <Section style={card}>
          <Field label="Naam" value={name} />
          <Field label="E-mail" value={email} />
          <Field label="Telefoon" value={phone} />
          <Field label="Bedrijf" value={company} />
          <Field label="Interesse" value={service} />
        </Section>

        <Section style={messageBox}>
          <Text style={messageLabel}>Bericht</Text>
          <Text style={messageText}>{message || '(geen bericht opgegeven)'}</Text>
        </Section>

        <Text style={footer}>
          Antwoord rechtstreeks op deze e-mail om {name || 'de aanvrager'} te bereiken.
        </Text>
      </Container>
    </Body>
  </Html>
)

const Field = ({ label, value }: { label: string; value?: string }) => (
  <Row style={fieldRow}>
    <Column style={fieldLabelCol}>
      <Text style={fieldLabel}>{label}</Text>
    </Column>
    <Column>
      <Text style={fieldValue}>{value || '—'}</Text>
    </Column>
  </Row>
)

export const template = {
  component: ContactNotificationEmail,
  subject: (data: Record<string, any>) =>
    `Nieuw contactformulier — ${data.name || 'onbekend'}`,
  displayName: 'Contact notificatie (Monia)',
  previewData: {
    name: 'Jan Janssens',
    email: 'jan@example.be',
    phone: '+32 470 12 34 56',
    company: 'Janssens BV',
    service: 'Strategiegesprek',
    message: 'Ik wil graag mijn bedrijf laten groeien via partnerships.',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, Helvetica, sans-serif' }
const container = { padding: '32px 28px', maxWidth: '600px', margin: '0 auto' }
const h1 = { fontSize: '22px', fontWeight: 'bold', color: '#1B2A4A', margin: '0 0 8px' }
const subtitle = { fontSize: '14px', color: '#666666', margin: '0 0 24px' }
const card = { backgroundColor: '#f5f7fa', padding: '20px', borderRadius: '6px', margin: '0 0 20px' }
const fieldRow = { marginBottom: '10px' }
const fieldLabelCol = { width: '110px', verticalAlign: 'top' as const }
const fieldLabel = { fontSize: '12px', color: '#666666', textTransform: 'uppercase' as const, letterSpacing: '0.5px', margin: '0', fontWeight: 'bold' as const }
const fieldValue = { fontSize: '14px', color: '#1B2A4A', margin: '0' }
const messageBox = { backgroundColor: '#ffffff', border: '1px solid #e5e7eb', borderLeft: '3px solid #2A7B88', padding: '16px 18px', margin: '0 0 20px', borderRadius: '4px' }
const messageLabel = { fontSize: '12px', color: '#666666', textTransform: 'uppercase' as const, letterSpacing: '1px', margin: '0 0 8px', fontWeight: 'bold' as const }
const messageText = { fontSize: '14px', color: '#333333', lineHeight: '1.6', margin: '0', whiteSpace: 'pre-wrap' as const }
const footer = { fontSize: '13px', color: '#666666', fontStyle: 'italic' as const, margin: '20px 0 0' }
