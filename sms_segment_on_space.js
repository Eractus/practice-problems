function smsSegmentOnSpace(message) {
  // Return the input message if it's less than or equal to the max segment length of 160.
  if (message.length <= 160) {
    return message;
  }

  // Define length, total number of segments, an empty string representing the current segment message, an answer array to collect the segment messages to return at the end, a counter to keep track of which segment we're currently on, and another variable keeping track of how far away from the current index the most recent space character was.
  let length = message.length;
  let numSegs = Math.ceil(message.length / 155);
  let segMsg = "";
  let ans = [];
  let currentSeg = 1;
  let nearestSpace;

  for (let i=0; i < length; i++) {
    let char = message[i];

    // If we run into a space character, set nearestSpace as 0 since we're on the nearest space at current index - otherwise increment it by 1 as we increment index for each iteration (until the next encountered space character)
    if (char === " ") {
      nearestSpace = 0
    } else {
      nearestSpace = nearestSpace + 1;
    }

    // String interpolation of the (current segment/total segment) bit that we add to the end of each "completed" segment messages.
    let temp = `(${currentSeg}/${numSegs})`;

    // Sometime between sending my first email and doing this extra credit problem, I realized that the check I could not get to work during the live challenge (where I tried using indices and modulo) was as simple as checking if the length of the segment message is 155... :(
    if (i === length - 1 && segMsg.length < 155) {
      // If it's the last character of the input string and the current segment mesage's length is less than 155, then we add this last character, the interpolated string of (current segment/total segment), and push this last segment message to the answer array.
      segMsg += char;
      segMsg += temp;
      ans.push(segMsg);
    } else if (segMsg.length < 155) {
      // if it's not the last character and the current segment's length is less than 155, just add the current character to the current segment message.
      segMsg += char;
    } else {
      // If the segment length is already 155 and the current character is not a space, then we are in the middle of a word (including possible punctuations) - we need to then slice the current segment message in such a way that it only includes up to the last word possible without pushing the segment message's length over 155. We need to also reassign the index of the loop to the index of the last space character so when the loop increments for the next iteration it'll start at the the first character of the first word of the remaining message input.
      if (char !== " ") {
        let spaceIdx = i - nearestSpace;
        segMsg = segMsg.slice(0, 155 - nearestSpace);
        i = spaceIdx;
      }
      // Whether the current character was a space (where we had to execute the above code block) or not, we need to add the interpolated string of (current segment/total segment), push this completed current segment message to the answer array, reset current segment message to an empty string and increment current segment counter for the next segment message.
      segMsg += temp;
      ans.push(segMsg);
      segMsg = "";
      currentSeg += 1;
    }
  }

  return ans;
}

// space and time complexities should stay the same as we still only perform one loop, just with added logic, and only added a new pointer to keep track of the space character's distance

// time complexity - O(n)

// space complexity - O(log(n))

// input
smsSegmentOnSpace("But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?")

// output
[ 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the(1/7)',
  'system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids(2/7)',
  'pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely(3/7)',
  'painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances(4/7)',
  'occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise,(5/7)',
  'except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,(6/7)',
  'or one who avoids a pain that produces no resultant pleasure?(7/7)' ]
