/// <reference path="../global.d.ts" />
'use strict'

/** @param {import('fastify').FastifyInstance} app */
module.exports = async function (app) {
  // create a hook for an entity
  app.platformatic.addEntityHooks(app.platformatic.entities.movie.singularName, {
    save: async (originalSave, { input, ctx, fields }) => {
      console.log('save hook', { input, ctx, fields })

      return originalSave({
        input: { ...input, title: `${input.title} - Modified in Hook` },
        fields,
      })
    },
  })
}
