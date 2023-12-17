# Aplikácia Lesnár - Aplikácia na usporiadavanie akcií + Trhovisko
## 1. Úvod 
### 1.1. Zmeny voči návrhu - Front end
- Pridali sme trhovisko, prihlásení uživatelia smejú pridávať produkty na trhovisko.
- Podľa feedbacku z návrhu sme zmenili spôsob tvorby akcií, uživatelia pri tvorení akcie vypĺňajú šablónu prázdnej funkcie miesto toho aby boli presmerovaní na formulár.
### 1.2. Zmeny voči návrhu - Back end
- zmenili sme databázu z MySQL na Json-Server
- API endpointy boli prerobené na základe nového návrhu
- pridali sme dátové modely pre trhovisko
  
## 2. Návrh
### Téma zadania: Aplikácia na usporiadavanie akcií + Trhovisko
Témou aplikácie je prihlasovanie sa na akcie a zakladanie akcií. Základnú funkcionalitu ktorú sme si pod týmto predstavovali je okrem spomínaného prihlasovania a zakladania taktiež aj filtrovanie akcií a komunikácia v rámci založenej akcie vo forme fóra.
Aplikáciu sme rozšírili o trhovisko, kde uživatelia môžu pridávať produkty na predaj, kde si predaj už dohodnú osobne cez kontakt, ktorý tu môžu zanechať. Priložitelné sú aj obrázky produktov, ale iba vo forme odkazu na obrázok. 

Moje súbory: 
- Trhovisko.js
- VytvoritPonuku.js
- PonukaPreview.js
