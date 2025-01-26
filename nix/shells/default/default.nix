{pkgs, ...}:
pkgs.mkShellNoCC {
  packages = with pkgs; [
    bun
    astro-language-server
  ];
}
