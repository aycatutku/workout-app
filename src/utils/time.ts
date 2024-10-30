// function(parameter:type):return type
export function secToMin(sec: number) {
  return (sec / 60).toFixed(1);
}

export function formatSec(second: number) {
  const min = Math.floor(second / 60);
  const sec = second % 60;

  const minText = `${min} min`;
  const secText = `${sec} sec`;

  const connector = 'and';

  const sentence = [];

  if (min > 0) {
    sentence.push(minText);
  }

  if (min > 0 && sec > 0) {
    sentence.push(connector);
  }

  if (sec > 0) {
    sentence.push(secText);
  }

  return sentence.join(' ');
}
