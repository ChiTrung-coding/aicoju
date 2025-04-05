import { H5P as H5PStandalone } from 'h5p-standalone'; //you need you an alias due to conflict

async function myAwesomePlayer() {
  const el = document.getElementById("h5p-container");
  const options = {
    h5pJsonPath: document.getElementById('jsonPath').value,
    frameJs: document.getElementById('frameJs').value,
    frameCss: document.getElementById('frameCss').value,
  };

  await new H5PStandalone(el, options);

  H5P.externalDispatcher.on("xAPI", (event) => {
    //do something useful with the event
    console.log("xAPI event: ", event);
  });
}

//don't forget to call the function
myAwesomePlayer();
