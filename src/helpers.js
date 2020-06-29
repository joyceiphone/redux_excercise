import { FIELD_NAMES } from "./constants";

export function getTextTemplates(
  fieldName,
  fieldAnswer
) {
  switch (fieldName) {
    case FIELD_NAMES.hometown: {
      return [
        `Grew up in ${fieldAnswer}.`,
        `Hail from ${fieldAnswer}.`,
        `${fieldAnswer} born and bred.`,
        `${fieldAnswer}, born and raised.`,
        `Transplant from ${fieldAnswer}.`,
        `${fieldAnswer} native.`,
        `Originally from ${fieldAnswer}.`,
      ];
    }

    case FIELD_NAMES.favoriteFood: {
      return [
        `Can’t get enough ${fieldAnswer}.`,
        `Addicted to ${fieldAnswer}`,
        `Obsessed with ${fieldAnswer}.`,
        `Love going out for ${fieldAnswer}.`,
        `Love eating ${fieldAnswer}.`,
        `Can’t live without ${fieldAnswer}.`,
        `${fieldAnswer} please.`,
      ];
    }

    case FIELD_NAMES.bar: {
      return [
        `${fieldAnswer} is my old haunt.`,
        `${fieldAnswer} is my Cheers.`,
        `${fieldAnswer} is my Paddy’s Pub.`,
        `You can always catch me at ${fieldAnswer}.`,
        `Take me to ${fieldAnswer} and I’ll marry you right now.`,
        `${fieldAnswer} is my spot.`,
        `${fieldAnswer} is my home-away-from-home.`,
      ];
    }

    case FIELD_NAMES.loveToDo: {
      return [
        `I ${fieldAnswer} constantly.`,
        `Love to ${fieldAnswer}.`,
        `Can never ${fieldAnswer} enough.`,
        `I ${fieldAnswer} whenever I get the chance.`,
        `In my spare time I ${fieldAnswer}.`,
      ];
    }

    case FIELD_NAMES.music: {
      return [
        `I just got into ${fieldAnswer}.`,
        `Been jamming to ${fieldAnswer} recently.`,
        `I’d kill to see ${fieldAnswer} live.`,
        `Love listening to ${fieldAnswer}.`,
        `${fieldAnswer} is my new obsession.`,
        `${fieldAnswer} is my new god.`,
      ];
    }

    case FIELD_NAMES.messageIf: {
      return [
        `Message if you ${fieldAnswer}.`,
        `Hit me up if you ${fieldAnswer}.`,
        `If you ${fieldAnswer}, we need to meet.`,
        `Send me a message if you ${fieldAnswer}.`,
        `If you ${fieldAnswer}, let’s chat.`,
      ];
    }

    default:
      return [];
  }
}
