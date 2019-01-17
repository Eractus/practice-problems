function smsSegment(message) {
  // if the message length is less than 160 just return the message
  if (message.length <= 160) {
    return message;
  }

  // otherwise define the length of message and total number of segments needed for later use
  let length = message.length;
  let numSegs = Math.ceil(message.length / 155);

  // define empty string to keep track of current segment message, array that will contain all segment messages to be returned at end, and a counter for what segment we're currently on.
  let segMsg = "";
  let ans = [];
  let currentSeg = 1;

  for (let i=0; i < length; i++) {
    // add the current charachter to the segment message
    segMsg += message[i];
    // this is the one that really tricked me - you need to define a way such that every 155 characters you also define the (currentSeg/numSegs) and append to the segment message before pushing that to the array, resetting the segment message to blank, and incrementing current segment.
    if (i === (currentSeg * 155) - 1 || i === length - 1) {
      let temp = `(${currentSeg}/${numSegs})`;
      segMsg += temp;
      ans.push(segMsg);
      segMsg = "";
      currentSeg += 1;
    }
  }

  return ans;
}

// time complexity - O(n) for the loop going through n length based on input length

// space complexity - I think it's O(log(n)) for the array used to carry log(n) message segment data points, but I think it might also be O(n) for the array carrying log(n) message segment data points TOTALING n characters from the input's total length.


// input
smsSegment("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")

// output
[ 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, wh(1/4)',
  'en an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into (2/4)',
  'electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passage(3/4)',
  's, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.(4/4)' ]
