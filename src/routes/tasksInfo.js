const taskRoutes = require('express').Router();
const taskData = require('../tasks.json');
const validator = require ('../helper/validator')
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');

taskRoutes.use(bodyParser.urlencoded({ extended: false }));
taskRoutes.use(bodyParser.json());

taskRoutes.get('/',(req,res) =>{
    res.status(200);
    res.send(taskData);
 })

 taskRoutes.get('/:Id' ,(req,res) =>{
    let tasksList = taskData.tasks;
    let taskIdPassed = req.params.Id;
    let result = tasksList.filter( val => val.Id == taskIdPassed);
    res.status(200).send(result);
 })
 
 taskRoutes.post('/',(req,res) => {
  const taskDetails = req.body;
  let writePath = path.join(__dirname,'..', 'tasks.json')
  if(validator.validateTask(taskDetails,taskData).status){
  let taskDataModified = taskData;
  taskDataModified.tasks.push(taskDetails);
  fs.writeFileSync(writePath, JSON.stringify(taskDataModified), {encoding: 'utf8', flag: 'w'})
  res.status(200).send("course has been added successfully");
 }
  else{
    res.status(400).json(validator.validateTask(taskDetails,taskData));
  }
}
 )

 taskRoutes.put('/:Id', (req, res) => {
    const taskId = req.params.Id;
    const taskDetails = req.body;
    let writePath = path.join(__dirname, '..', 'tasks.json');
    const taskIndex = taskData.tasks.findIndex(task => task.Id == taskId);
    
    if (taskIndex !== -1) {
        if(validator.validateTask(taskDetails,taskData).status){
      taskData.tasks[taskIndex] = { ...taskData.tasks[taskIndex], ...taskDetails };
  
      fs.writeFileSync(writePath, JSON.stringify(taskData), { encoding: 'utf8', flag: 'w' });
      res.status(200).send('Task has been updated successfully');
    }
      else{
        res.status(400).json(validator.validateTask(taskDetails,taskData));
      }} else {
      res.status(404).send('Task not found');
    }
  });
  
  taskRoutes.delete('/:Id', (req, res) => {
    const taskId = req.params.Id;
    let writePath = path.join(__dirname, '..', 'tasks.json');
    
    const taskIndex = taskData.tasks.findIndex(val => val.Id == taskId);
    
    if (taskIndex !== -1) {
      taskData.tasks.splice(taskIndex, 1);
  
      fs.writeFileSync(writePath, JSON.stringify(taskData), { encoding: 'utf8', flag: 'w' });
      res.status(200).send('Task has been deleted successfully');
    } else {
      res.status(404).send('Task not found');
    }
  });
  
  
 module.exports = taskRoutes; 