import * as React from "react";
import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Preview,
  Hr,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  note: string;
}

export const EmailTemplate = ({ note }: EmailTemplateProps) => {
  const styles = {
    container: {
      margin: "0 auto",
      padding: "2rem",
      border: "1px solid #ccc",
      borderRadius: "8px",
      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#f9f9f9",
    },
    hr: {
      marginTop: "1rem",
      marginBottom: "1rem",
      border: "none",
      borderTop: "1px solid #0055ff",
    },
    text: {
      fontSize: "1rem",
      marginTop: "0",
      marginBottom: "1rem",
      color: "#333",
      text: "center",
    },
    title: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#0055ff",
      textAlign: "center" as const,
    },
    footer: {
        fontSize: "1rem",
        color: "#333",
        textAlign: "center" as const,
      },
    link: {
      color: "#0055ff",
      textDecoration: "none",
    },
  };

  return (
    <Html>
      <Head />
      <Preview>New Note Received!</Preview>
      <Body
        style={{
          fontFamily: "'Helvetica Neue', Arial, sans-serif",
          background: "#fff",
        }}
      >
        <Container style={styles.container}>
          <Section>
            <Text style={styles.title}>NOTE</Text>
            <Text style={styles.text}>{note}</Text>
          </Section>
          <Hr style={styles.hr} />
          <Section>
            <Text style={styles.footer}>
              Powered by{" "}
              <a
                rel="noopener"
                href="https://augustobritos.com"
                target="_blank"
                style={styles.link}
              >
                augustobritos.com
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
