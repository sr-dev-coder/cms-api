import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity project',

  projectId: '3s28te93',
  dataset: 'productio',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
