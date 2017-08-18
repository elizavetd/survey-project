export default function() {
	return '_' + Math.random().toString(36).substr(2, 9);
};

export const generateSurveyID = function() {
	return '' + Math.random().toString(36).substr(2, 12).toUpperCase();
}