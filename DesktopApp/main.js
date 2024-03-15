const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    title: "iControl", // Set your desired application title
    icon: path.join(__dirname, "favicon.ico"), // Replace 'icon.ico' with your ICO file name and path
  });

  // Load the URL
  mainWindow.loadURL(
    "https://icontrol.icomplytech.com/login/?organization=iComply%20Lifescience%20Solutions%20Test&module=CAPA%20Module&role=Initiator"
  );

  // Hide the menu bar
  mainWindow.setMenu(null);

  // Open the DevTools (comment this line if you want to hide the DevTools)
  // mainWindow.webContents.openDevTools();

  mainWindow.on("closed", () => {
    mainWindow = null;
  });

  // Maximize the window
  mainWindow.maximize();
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});
