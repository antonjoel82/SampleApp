// Determine the best way to handle this...

const MAX_USERNAME_LENGTH = 20;
const MAX_TITLE_LENGTH = 70;
const MAX_SUMMARY_LENGTH = 120;
const MAX_DESCRIPTION_LENGTH = 40000;
const MAX_TAG_LABEL_LENGTH = 35;

// Enums
const ThumbnailTypes = Object.freeze({
  Link: 'link',
  File: 'file',
  Icon: 'icon'
});

const ResourceTypes = Object.freeze({
  Video: 'video',
  Link: 'link',
  Image: 'image',
  Document: 'document',
  Text: 'text'
});

module.exports = {
  MAX_USERNAME_LENGTH,
  MAX_TITLE_LENGTH,
  MAX_SUMMARY_LENGTH,
  MAX_DESCRIPTION_LENGTH,
  MAX_TAG_LABEL_LENGTH,
  ThumbnailTypes,
  ResourceTypes
};
