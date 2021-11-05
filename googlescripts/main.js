import * as processing from './processing'

function main() {
  var planID = "1LADfAPcvDQdvbz013OSvJTNA1-AKcL2UvQoUeY-OL60"; //Id for spreedsheet
  var formID = "1tOSmi7U26zIKji8rEtq84u3d0SaqRLfiJTJwEz5YSPc"; //Id for form
  var form = FormApp.openById(formID); //Will put a form inside variable "form" 
  var writeData = SpreadsheetApp.openById(planID).getSheetByName("map"); //Will put the page "map" of spreedsheet inside for variable "writedata"

  var allResponse = form.getResponses();
  var qtdResponse = allResponse.length;
  var lastResponse = allResponse[qtdResponse - 1]; // [qtdResponse - 1] or [qtdResponse - n] for acessing a specify response
  var questionsResponse = lastResponse.getItemResponses();

  mapVarkChoices(writeData, questionsResponse);
  sumVark(writeData, lastResponse.getRespondentEmail());
}
