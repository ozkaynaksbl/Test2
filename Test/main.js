const {app,Tray,Menu, BrowserWindow}=require('electron');
const path=require('path');
//var AutoLaunch = require('auto-launch'); // sistem başlangıç için

const iconPath=path.join(__dirname,'userr.png');
const iconPath2=path.join(__dirname,'title');

global.sharedObject = {
    someProperty: 'default value'
  }



  require('dns').resolve('www.google.com', function(err) {
    if (err) {
       console.log("No connection");
    } else {
       console.log("Connected");
    }
  });
//minecraftAutoLauncher.disable();
 

/*minecraftAutoLauncher.isEnabled()
    .then(function (isEnabled) {
        if (isEnabled) {
            return;
        }
        minecraftAutoLauncher.enable();
    })
    .catch(function (err) {
        // handle error
    });
    */
//


app.on('ready', function(){
win=new BrowserWindow(
    {show:true, backgroundColor:'#335956',icon:iconPath}
);
//app.setLoginItemSettings()// Kullanıcı oturum açtığında bu uygulama başlaması için
/*
let autoLaunch = new AutoLaunch({
    name: 'Your app name goes here',
    path: app.getPath('exe'),
  });
  autoLaunch.isEnabled().then((isEnabled) => {
    if (!isEnabled) autoLaunch.enable();
  });
  */
const mainMenu=Menu.buildFromTemplate(mainMenuTemplate);
    // insert menu
    Menu.setApplicationMenu(mainMenu);

appIcon=new Tray(iconPath);

win.loadURL('http://localhost:55910/Account/Login');

const ses = win.webContents.session
console.log(ses.getUserAgent())
//setTimeout(deneme, 1000);

function intervalFunc() {
    console.log('Cant stop me now!');
  }
  

// Klasör okuma işlemi 

  const testFolder = './tests/';
const fs = require('fs');
var list=[];

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
   // console.log(file);
    list.push(file.toString());
   // list.push(file);
    
  });
})

   for(var i=0;i<list.length;i++)
   {
      console.log(list[i]);

   }
  //setInterval(intervalFunc, 1500);// 1.5 sn de bir intervalFunc çağırıyor
function deneme()
{
console.log("test");

}
// System tray menu Create 
var contextMenu=Menu.buildFromTemplate([
    {
        label:'Çıkış',
        click()
        {
           app.quit();
         
        }
    },


    {
        label:'Uygulamayı gizle',
        click(event){
            event.preventDefault();
            mainWindow.hide();
        
        }
    },

    
        {
            label:'Uygulamayı Aç',
            click(event){
                event.preventDefault();
                mainWindow.show();
            
            }
        },

    { 
        label:'Item2',
      submenu:[
          {
              label:'Uygulamayı aç',
              click()
              {
                app.show();
              }

          },
          {
            label:'Uygulamayı Gizle',
            click()
              {
                app.hide();
              }
        }
    ]
     }   
]);
appIcon.setToolTip("This is an electron tray application");
appIcon.setContextMenu(contextMenu);
});

const mainMenuTemplate=[
    
];

app.on('window-all-closed', () => {

   // console.log(test);
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    // if (process.platform !== 'darwin') {
    //   app.quit()
    // }
  })