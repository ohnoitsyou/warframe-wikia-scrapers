'use strict';

const fs = require('fs-extra');

const WeaponScraper = require('./src/dataScrapers/WeaponScraper');
const WarframeScraper = require('./src/dataScrapers/WarframeScraper');
const RelicScraper = require('./src/dataScrapers/RelicScraper');

const run = async () => {
  if (!await fs.exists('./tmp')) {
    await fs.mkdir('./tmp');
  }

  let scraper = new WeaponScraper();
  try {
    console.log('Scraping Weapons...')
    await scraper.scrape();
  } catch (e) {
    console.error(`[ERROR] Error scraping Weapon data: ${e.stack}`);
  }

  scraper = new WarframeScraper();
  try {
    console.log('Scraping Warframes...')
    await scraper.scrape();
  } catch (e) {
    console.error(`[ERROR] Error scraping Warframe data: ${e.stack}`);
  }

  scraper = new RelicScraper();
  try {
    console.log('Scraping Relics...')
    await scraper.scrape();
  } catch (e) {
    console.error(`[ERROR] Error scraping Relic data: ${e.stack}`);
  }

  await fs.remove('./tmp');
};

run();
