import { app, BrowserWindow } from 'electron';

const createWindow = async () => {
  const mainWindow = new BrowserWindow({ width: 1200, height: 780 });
  await mainWindow.loadURL('http://localhost:8000');
};

app.whenReady().then(createWindow);
app.once('window-all-closed', () => app.quit());
