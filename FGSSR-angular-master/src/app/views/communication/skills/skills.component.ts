import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HomeService } from 'app/services/home.service';
import { isThisHour } from 'date-fns';


@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
 isButtonVisible = false;
 isButtonVisibleAI =false;
  dropdownList = [];
  selectedItems=[];
  posts:any ; 
  dropdownSettings:IDropdownSettings={};
  dropDownForm:FormGroup;
  
  constructor(private fb: FormBuilder, public service: HomeService) {  }
  
  ngOnInit(): void {
   
    this.dropdownList = [
      {	item_id:	1	,	item_text: 'HTML' },
      {	item_id:	2	,	item_text: 'CSS' },
      {	item_id:	3	,	item_text: 'JavaScript' },
      {	item_id:	4	,	item_text: 'PHP or Python' },
      {	item_id:	5	,	item_text: 'MySQL or PostgreSQL' },
      {	item_id:	6	,	item_text: 'React or Angular or Vue.js' },
      {	item_id:	7	,	item_text: 'REST API' },
      {	item_id:	8	,	item_text: 'AJAX' },
      {	item_id:	9	,	item_text: 'C++' },
      {	item_id:	10	,	item_text: 'Unity or Unreal Engine' },
      {	item_id:	11	,	item_text: 'Game development frameworks' },
      {	item_id:	12	,	item_text: 'Graphics design and Animation' },
      {	item_id:	13	,	item_text: 'Python' },
      {	item_id:	14	,	item_text: 'Natural Language Processing (NLP)' },
      {	item_id:	15	,	item_text: 'Machine Learning' },
      {	item_id:	16	,	item_text: 'Deep Learning' },
      {	item_id:	17	,	item_text: 'Neural Networks' },
      {	item_id:	18	,	item_text: 'Computer Vision' },
      {	item_id:	19	,	item_text: 'Java or Kotlin or Swift' },
      {	item_id:	20	,	item_text: 'React Native or Flutter' },
      {	item_id:	21	,	item_text: 'D3.js' },
      {	item_id:	22	,	item_text: 'Plotly' },
      {	item_id:	23	,	item_text: 'Pandas' },
      {	item_id:	24	,	item_text: 'Matplotlib' },
      {	item_id:	25	,	item_text: 'ARKit or ARCore' },
      {	item_id:	26	,	item_text: 'C' },
      {	item_id:	27	,	item_text: 'Node.js' },
      {	item_id:	28	,	item_text: 'Raspberry Pi or Arduino' },
      {	item_id:	29	,	item_text: 'MQTT or HTTP' },
      {	item_id:	30	,	item_text: 'IoT platforms' },
      {	item_id:	31	,	item_text: 'Blockchain' },
      {	item_id:	32	,	item_text: 'Smart Contracts' },
      {	item_id:	33	,	item_text: 'Solidity' },
      {	item_id:	34	,	item_text: 'Web3.js' },
      {	item_id:	35	,	item_text: 'Ethereum' },
      {	item_id:	36	,	item_text: 'Django or Flask (for backend)' },
      {	item_id:	37	,	item_text: 'JavaScript (for frontend)' },
      {	item_id:	38	,	item_text: 'PayPal or Stripe API (for payment processing)' },
      {	item_id:	39	,	item_text: 'Numpy' },
      {	item_id:	40	,	item_text: 'OpenCV' },
      {	item_id:	41	,	item_text: 'Scikit-Learn' },
      {	item_id:	42	,	item_text: 'AWS or Azure' },
      {	item_id:	43	,	item_text: 'Database Management' },
      {	item_id:	44	,	item_text: 'NLP' },
      {	item_id:	45	,	item_text: 'Django/Flask' },
      {	item_id:	46	,	item_text: 'MySQL/PostgreSQL' },
      {	item_id:	47	,	item_text: 'SQL' },
      {	item_id:	48	,	item_text: 'Scikit-learn' },
      {	item_id:	49	,	item_text: 'Cybersecurity' },
      {	item_id:	50	,	item_text: 'Cloud' },
      {	item_id:	51	,	item_text: 'AWS/Azure' },
      {	item_id:	52	,	item_text: 'Blender' },
      {	item_id:	53	,	item_text: 'CAD software' },
      {	item_id:	54	,	item_text: '3D printing technologies' },
      {	item_id:	55	,	item_text: 'Signal Processing' },
      {	item_id:	56	,	item_text: 'Unity/Unreal Engine' },
      {	item_id:	57	,	item_text: 'ARKit/ARCore' },
      {	item_id:	58	,	item_text: 'Graphics Design' },
      {	item_id:	59	,	item_text: 'Animation' },
      {	item_id:	60	,	item_text: 'Quantum Computing' },
      {	item_id:	61	,	item_text: 'Quantum Mechanics' },
      {	item_id:	62	,	item_text: 'Cloud Computing' },
      {	item_id:	63	,	item_text: 'IoT' },
      {	item_id:	64	,	item_text: 'Raspberry Pi/Arduino' },
      {	item_id:	65	,	item_text: 'MQTT/HTTP' },
      {	item_id:	66	,	item_text: 'Cryptocurrency' },
      {	item_id:	67	,	item_text: 'Django or Flask (for web development)' },
      {	item_id:	68	,	item_text: 'JavaScript (for frontend development)' },
      {	item_id:	69	,	item_text: 'SQL or NoSQL databases' },
      {	item_id:	70	,	item_text: 'Machine Learning (optional)' },
      {	item_id:	71	,	item_text: 'Robotics' },
      {	item_id:	72	,	item_text: 'Financial Markets' },
      {	item_id:	73	,	item_text: 'Raspberry Pi or Arduino (for hardware programming)' },
      {	item_id:	74	,	item_text: 'Algorithmic Trading' },
      {	item_id:	75	,	item_text: 'Collaborative Filtering' },
      {	item_id:	76	,	item_text: 'Network Analysis' },
      {	item_id:	77	,	item_text: 'Graph Theory' },
      {	item_id:	78	,	item_text: 'Data Visualization' },
      {	item_id:	79	,	item_text: 'Raspberry Pi' },
      {	item_id:	80	,	item_text: 'MQTT' },
      {	item_id:	81	,	item_text: 'Django or Flask' },
      {	item_id:	82	,	item_text: 'Payment Gateway Integration' },
      {	item_id:	83	,	item_text: 'Unity' },
      {	item_id:	84	,	item_text: '3D Modeling Software' },
      {	item_id:	85	,	item_text: 'MySQL or MongoDB' },
      {	item_id:	86	,	item_text: 'Firebase or MongoDB' },
      {	item_id:	87	,	item_text: 'Spoonacular API' },
      {	item_id:	88	,	item_text: 'Sensors' },
      {	item_id:	89	,	item_text: 'Firebase or OpenWeather API' },
      {	item_id:	90	,	item_text: 'Blockchain Integration' },
      {	item_id:	91	,	item_text: 'Google Maps API Integration' },
      {	item_id:	92	,	item_text: 'NetworkX or Gephi' },
      {	item_id:	93	,	item_text: 'Data Visualization Libraries' },
      {	item_id:	94	,	item_text: 'Firebase or Socket.io' },
      {	item_id:	95	,	item_text: 'Machine Learning Libraries' },
      {	item_id:	96	,	item_text: 'Flask Framework' },
      {	item_id:	97	,	item_text: 'Firebase' },
      {	item_id:	98	,	item_text: 'Plaid API Integration' },
      {	item_id:	99	,	item_text: 'LMS Framework' },
      {	item_id:	100	,	item_text: 'Ultrasonic Sensors' },
      {	item_id:	101	,	item_text: 'Natural Language Processing Libraries' },
      {	item_id:	102	,	item_text: 'Google Maps API' },
      {	item_id:	103	,	item_text: 'Google Fit or Apple Health API' },
      {	item_id:	104	,	item_text: 'Video Conferencing API' },
      {	item_id:	105	,	item_text: 'Nutrition API Integration' },
      {	item_id:	106	,	item_text: 'Google Translate API' },
      {	item_id:	107	,	item_text: 'Recipe API integration' },
      {	item_id:	108	,	item_text: 'Dialogflow or Wit.ai or IBM Watson' },
      {	item_id:	109	,	item_text: 'Node.js or Python' },
      {	item_id:	110	,	item_text: 'Integration with messaging platforms (e.g. Facebook Messenger Slack)' },
      {	item_id:	112	,	item_text: 'Integration with Google Maps API' },
      {	item_id:	113	,	item_text: 'Integration with Job Search APIs (e.g. Indeed	Glassdoor)' },
      {	item_id:	115	,	item_text: 'MongoDB or PostgreSQL' },
      {	item_id:	116	,	item_text: 'Integration with Music APIs (e.g. Spotify	Apple Music)' },
      {	item_id:	118	,	item_text: 'Integration with Weather APIs (e.g. OpenWeatherMap AccuWeather)' },
      {	item_id:	120	,	item_text: 'NLTK' },
      {	item_id:	121	,	item_text: 'Dialogflow or IBM Watson' },
      {	item_id:	122	,	item_text: 'Fitness Tracking API Integration' }
      
    ];
    this.dropdownSettings = {
      idField: 'item_id',
      textField: 'item_text',
      enableCheckAll: false,
      allowSearchFilter:true
    };
   
    this.dropDownForm = this.fb.group({
      myItems: [this.selectedItems]
  });
 
  }
   count =0 ;
  onItemSelect(item: any) {
    //console.log('onItemSelect', item);



this.selectedItems.push(item);

console.log(this.selectedItems);

   this.isButtonVisible = true;
this.count++;
//console.log(this.count);
}
onItemDeSelect(item: any) {
  this.count--;
  //console.log('onItemDeSelectAll', item);

  var index = this.selectedItems.findIndex(i=> i.item_text == item.item_text);
  this.selectedItems.splice(index,1);

console.log(this.selectedItems);

  if(this.count==0){
  this.isButtonVisible = false;
  this.isButtonVisibleAI=false;
}

} 
submitAT(){
this.isButtonVisibleAI=true;

var txt='';
for(var i=0;i<this.selectedItems.length; i++){
 txt+= this.selectedItems[i].item_text;
 if(i!=this.selectedItems.length-1)
    txt+=',';
}

console.log(txt);
var itemArr = {
  inputs:txt
}

console.log(itemArr);

 this.service.addSkills(itemArr).subscribe(response => {
  console.log(response);
  this.posts = response.result;
  console.log(response);
 });

}
}
