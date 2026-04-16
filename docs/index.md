# Singleton (Einzelstück)

!!! info "Zweck (Intent)"
    Sichert zu, dass eine Klasse genau ein Exemplar besitzt, und stellt einen globalen Zugriffspunkt darauf bereit.

## Motivation
Manchmal ist es wichtig, dass von einer Klasse nur genau eine Instanz existiert (z. B. ein Log-Manager oder ein Datenbank-Verbindungspool).

## Anwendbarkeit
Verwenden Sie das Singleton-Muster, wenn:
*   es von einer Klasse genau eine Instanz geben darf.
*   dieses Exemplar über einen bekannten Zugriffspunkt für Klienten verfügbar sein muss.

## Struktur
```mermaid
classDiagram
    class Singleton {
      -static instance: Singleton
      -Singleton()
      +static getInstance() Singleton
    }

