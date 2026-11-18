// Guard: npm cannot install or run reliably from a Google Drive synced folder
// (Drive truncates files during npm's mass writes → e.g. 0-byte package.json).
const cwd = process.cwd()
if (/Other computers|My Drive|Google Drive|^G:\\/i.test(cwd)) {
  console.error(`
  ✖ This copy of the Opus Eve site is inside Google Drive:
      ${cwd}
    npm corrupts files here. Use the local working copy instead:
      cd C:\\Users\\TempKevin\\Projects\\opus-eve-website
      npm run dev
    (The Drive folder is a backup mirror — see README.md.)
`)
  process.exit(1)
}
