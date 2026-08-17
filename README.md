# devbeni.lol

Balló Benedek (devbeni) személyes portfólió oldala.

## Technológiák

- [Vite](https://vitejs.dev) + [React](https://react.dev) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) & [HeroUI](https://heroui.com)
- [Framer Motion](https://www.framer.com/motion) – az animációkhoz

## Felépítés

```
src/
  components/   # Hero, About, Projects, Contact, Navbar, Background, animációs helperek
  config/site.ts # profil, elérhetőségek, projektek, stack – itt szerkeszthető a tartalom
  layouts/      # oldalkeret (háttér, navbar, footer)
  pages/        # a főoldal, ami összefűzi a szekciókat
```

A megjelenített tartalom (bemutatkozás, projektek, elérhetőségek, számok) egy
helyen, a `src/config/site.ts` fájlban van – elég ott átírni.

## Fejlesztés

```bash
npm install
npm run dev      # fejlesztői szerver
npm run build    # production build a dist/ mappába
npm run preview  # a build kipróbálása
```

## Animációk

Minden mozgás `prefers-reduced-motion`-tudatos: ha a látogató kevesebb animációt
kér az operációs rendszerében, a parallax, a kurzort követő fény és a lebegő
elemek kikapcsolnak.

## Licenc

[MIT](LICENSE)
