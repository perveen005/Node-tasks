class validator{ 
    static validateTask(taskDetails,taskData) {
    if (!taskDetails.title || taskDetails.title.trim() === '') {
      return { valid: false, message: 'Title is required.' };
    }
  
    if (!taskDetails.description || taskDetails.description.trim() === '') {
      return { valid: false, message: 'Description is required.' };
    }
  
    if (typeof taskDetails.flag !== 'boolean') {
        return { valid: false, message: 'Completion status should be a boolean value.' };
      }
      
   if(!this.validateUniqueId(taskDetails,taskData))
   {
    return { valid : false , message : 'Id is not unique'}
   }
    return { valid: true };
  }
  static validateUniqueId(taskDetails,taskData){
    let valueFound= taskData.tasks.some (el=> el.Id === taskDetails.Id);
    if(valueFound) return false;
    return true;
  }
}
module.exports = validator;
 