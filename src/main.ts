const { BrowserWindow, app } = require('electron');

const createWindow = () => {
  const mainWindow = new BrowserWindow();
  mainWindow.loadURL('http://localhost:8000');
};

app.whenReady().then(createWindow);
app.once('window-all-closed', () => app.quit());

