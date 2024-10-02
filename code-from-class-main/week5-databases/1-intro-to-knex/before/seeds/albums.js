import { albumSeeds } from "../seedData.js";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('albums').del()

  await knex('albums').insert(albumSeeds);
};
