const imageUpload = document.getElementById('imageUpload')
const imageUpload = document.getElementById('imageUpload')

//save cookie
//store token for two minutes
//check if token exists
//onclick listener
//btn

const auth = () => {
  let result;
  console.log('-> loading');
  const image = document.getElementById("slefie").src;
  const userid =  document.getElementById("user_id").textContent;
  Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models')
  ]).then(start(image , userid))
}

async function start(image , userid) {
  console.log('models loaded');
  const ref_image =  await faceapi.fetchImage(`${url}api/files/images/refrence/${userid}`)
  const test_image = await faceapi.bufferToImage(image);

  const detection1 = await faceapi.detectSingleFace(ref_image).withFaceLandmarks().withFaceDescriptor();
  const detection2 = await faceapi.detectSingleFace(test_image).withFaceLandmarks().withFaceDescriptor();

  const faceMatcher = new faceapi.FaceMatcher(detection1,0.6)

  if (detection2) {
    const bestMatch = faceMatcher.findBestMatch(detection2.descriptor)
    console.log(bestMatch.toString())
  }

  let distance = 0;
  if(detection1 && detection2)
    distance = faceapi.euclideanDistance(detection1.descriptor, detection2.descriptor)

  if(distance > 0.7)
      return true
  return false;
  
}

auth()


