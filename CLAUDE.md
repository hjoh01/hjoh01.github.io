# hjoh01.github.io

Personal academic site for Hyun-Jic Oh. Jekyll, published from `main` by
GitHub Pages. No build step to run and nothing to deploy by hand: push to
`main` and the live site updates in one to three minutes.

The theme is `yaoyao-liu/minimal-light`, pulled in as a **remote theme**, so
the theme's files are not in this repo — only content and a few overrides.

## Where content lives

| Path | Holds |
| --- | --- |
| `_config.yml` | Name, role, email, avatar, CV link, Scholar/GitHub/LinkedIn |
| `index.md` | Home: About, Research Interests, Education & Experience, latest 5 news |
| `news.md` | The `/news/` page; renders every entry |
| `_data/news.yml` | Every news entry, newest first |
| `_data/publications.yml` | Papers, with thumbnails, links and badges |
| `_data/projects.yml` | Projects — kept but not rendered |
| `_includes/` | `news.md`, `publications.md`, `honors.md`, `services.md`, `projects.md` |
| `_layouts/homepage.html` | Local override of the theme layout |
| `assets/img/`, `assets/files/` | Thumbnails, avatar, CV PDF |

The home page shows the first five entries of `_data/news.yml` automatically;
the rest fall through to `/news/`. Projects are hidden, not deleted — add
`{% include_relative _includes/projects.md %}` back to `index.md` to show them.

## Keep the CV in step with the site

The CV is a separate artifact: it is written in Overleaf (project
`69a7caf9c58f2942475e96c2`) and lands here only as a compiled PDF in
`assets/files/`, linked from `cv_link` in `_config.yml`.

**After changing any of the following, tell the user the CV likely needs the
same edit, and say which CV section.** Do not assume it was handled elsewhere.

| Site change | Matching CV section |
| --- | --- |
| News entry about a paper | Publications |
| New paper in `_data/publications.yml` | Publications |
| New award in `_includes/honors.md` | Honors and Awards |
| New reviewing role in `_includes/services.md` | Academic Services |
| New role or affiliation in `index.md` / `_config.yml` | Experience, and the header block |

News that is not about a paper — starting a job, finishing a visiting
position, a talk — usually maps to **Experience** rather than Publications.

Updating the CV is manual, because Overleaf's Git integration is paid on this
account: edit and compile in Overleaf, download the PDF, replace the file in
`assets/files/`, point `cv_link` at the new filename, push. A local copy of
the LaTeX source may sit in `Desktop\Academic_CV___Hyunjic_Oh\` — it is not
authoritative, Overleaf is. Re-download before editing it locally.

## Scheduled changes

Raise these with the user when the date has passed, even if they ask about
something else.

- **Apr. 2027** — the Stanford postdoc starts (Department of Pathology; offer
  accepted Aug. 2026). It is **not announced on the site**: the entry sits
  commented out at the top of `_data/news.yml`, held back so an early
  announcement does not narrow the offers that might still come in. When the
  user decides to announce, uncomment it. At the move itself, put it in the
  Education & Experience list in `index.md`, update `position` and
  `affiliation` in `_config.yml` (currently VIENCE Inc.), and add it to
  Experience on the CV.

## Conventions

- **Asset paths start with `/`.** The theme writes `./assets/...`, which 404s
  on any page below the root and leaves it unstyled. `_layouts/homepage.html`
  is a local copy with those rewritten root-relative. Keep new paths
  root-relative in the layout, `_config.yml` and `_data/*.yml`.
- **The layout override does not track the theme.** Upstream changes to
  `minimal-light`'s layout skip our copy; diff by hand if something is worth
  pulling in.
- **Everything in the repo gets published.** Jekyll copies unrecognised files
  straight to the output. Keep unpublished drafts outside the repo rather than
  relying on `exclude`.
- Mark the author's own name `<strong>Hyun-Jic Oh</strong>` in publication
  entries, and prefix co-first authors with `*`.

## Local preview

Needs Ruby; the `Gemfile` pins the `github-pages` gem so a local render matches
what GitHub publishes.

```bash
bundle install
bundle exec jekyll serve   # http://localhost:4000
```

Check `/news/` as well as `/` — the theme is built for a single page, and
sub-pages are where breakage shows up.
