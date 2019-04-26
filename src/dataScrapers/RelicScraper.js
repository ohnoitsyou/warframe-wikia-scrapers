'use strict';

const WikiaDataScraper = require('./WikiaDataScraper');
const transformRelic = require('./transformers/transformRelic');

class RelicScraper extends WikiaDataScraper {
  constructor() {
    super('https://warframe.fandom.com/wiki/Module:Void/data?action=edit', 'Void', transformRelic, 'Relic');
  }
}

module.exports = RelicScraper;
