# CivicKit moved

CivicKit now lives at **https://civickit.github.io/** (repo: `civickit/civickit.github.io`).

This repository exists only to keep old links working. It serves a dependency-free
redirect: `index.html` for the base path and `404.html` for every sub-path, which
GitHub Pages serves for unmatched routes — a small inline script preserves the
sub-path, so `/civickit/civiclens` lands on `/civiclens`.

No build, no packages, nothing to maintain. It is intentionally kept free of any
dependencies because it is published on `thetiniestspoon.github.io`, an origin that
holds the household's saved session; nothing with a supply chain belongs here.
