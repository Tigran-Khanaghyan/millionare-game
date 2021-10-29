export function checkForm(form) {
  const allAnswers = form.answers.some((answer) => !!answer);

  if (!allAnswers || !form.rightAnswer || !form.question) {
    return false;
  }
  return true;
}
