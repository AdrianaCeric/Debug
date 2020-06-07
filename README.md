# Debug, a Pest-Classifier🐞
![GitHub Logo](img/DebugLogo.png)
## Inspiration
Farmers rely heavily on crop yields as their main source of income. However, many pests can get in the way of optimal production yields as they can eat and harm the field crops. Pesticides are commonly used by many farmers to get rid of them. Despite that, the large quantities of pesticides used to spray on acres of farmland can be expensive, and many times, farmers misuse pesticides on the wrong bugs. The overuse of pesticides has many consequences which can cost farmers money, time, and resources:

- First, the EPA estimates up to **70 million pounds of pesticides are lost to drift each year**, a common issue in which extra pesticide chemicals are carried by the wind, hurting the ecosystems, the farmer's wallet, and human health.
- Second, an overabundance of pesticides on the wrong species can lead to **pesticide resistance**. As a result, pesticide costs should be expected to increase as new variations of the pesticide are more expensive. 
- Third, **spraying pesticides on beneficial pests** can negatively impact the production rate of the farmer's crops, which is a waste of money. 

These effects worsen each year, causing rural/small farmers to lose thousands of dollars, as on average, they spend around $21,000 on pesticides alone as of 2019. This number will only increase in the coming years. 

## What it does
This is where the Debug application comes into play. Using Debug, farmers can upload a picture of a recurrent bug they observe in their fields. Once uploaded, they are provided with a summary of the pest and whether it is harmful or not, along with some potential pesticides or alternatives they could use. This way, the farmers can reduce the money spent on warding away bugs that appear to be pests but are not. 

## How we built it
HTML5 and CSS3 were used for structure and styling. Javascript was implemented for responsiveness, in particular for the drag and drop/upload feature. [Tensorflow.js](https://www.tensorflow.org/js) was used for the image classification machine learning feature. To obtain the images used for training, a mixture of the [ImageNet](http://www.image-net.org/index) library and Google Images were used. The datasets were trained using [Teachable Machine](https://teachablemachine.withgoogle.com/). We used [Cordova](https://cordova.apache.org) (an open-source software that creates mobile applications using the HTML, CSS, and Javascript code of web applications) to make the Android version of Debug. 

## Challenges we ran into
The most challenging component of this project was definitely the machine learning aspect. There were many image Javascript libraries available, so it took time to find the best fit for this application, which turned out to be TensorFlow. Another complicated feature turned out to be the drag and drop feature. There were not many resources online. Despite this, Daniel found a way to implement it with some scrounging. Overall, many of our issues were quickly solved as each of us had varied skills and open minds. 

## Accomplishments that we're proud of
We are proud to have implemented an image classification model to real-world applications such as the ongoing food crisis and the overuse of pesticides in a short amount of time. All of us applied our strengths and learned lots of new skills along the way!

## What we learned
This was the first time many of us have attempted machine learning, so we learned a lot about model training, incorporating datasets, and integrating it into a user-friendly platform. 

## What's next for Debug
As of now, Debug can only classify locusts, armyworms, honey bees, and earwigs. We are planning on expanding our database of bugs and making the algorithm more accurate. 
Additionally, we will include an option for farmers to input the crop on which they found the insect so pesticide recommendations do not harm the crops.
We will also develop an iOS version of Debug. 
 

## Contributors
Debug was created between June 5th and 7th, 2020 during the "Hack the Northeast" hackathon. 

Contributors: 
- Daniel Noguera: https://github.com/DanielNogueraDevelopment
- Ujjani Das: https://github.com/ujjainidas
- Dhruv Rawat: https://github.com/Pop0097
- Adriana Ceric (owner of this repository): https://github.com/AdrianaCeric
