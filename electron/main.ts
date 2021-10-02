import { app, BrowserWindow } from 'electron';
import * as path from "path";
import * as isDev from 'electron-is-dev';

const createWindow = async () => {
  // Crate the browser window
  const mainWindow = new BrowserWindow({ width: 1200, height: 1000 });
  if (isDev) {
    await mainWindow.loadURL("http://localhost:3000/index.html");
  } else {
    // 'build/index.html'
    await mainWindow.loadURL(`file://${__dirname}/../index.html`);
  }

  // Hot Reloading
  if (isDev) {
    // 'node_modules/.bin/electronPath'
    require("electron-reload")(__dirname, {
      electron: path.join(
        __dirname,
        "..",
        "..",
        "node_modules",
        ".bin",
        "electron"
      ),
      forceHardReset: true,
      hardResetMethod: "exit",
    });
  }

  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
};

app.whenReady().then(createWindow);
app.once('window-all-closed', () => app.quit());
