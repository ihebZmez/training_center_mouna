import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20}),
  email: g.email().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  address: g.string().length({min: 5, max: 60}),
  role: g.relation(),
  Training_Class: g.relation(() => Training_Class).list().optional(),
  quizz: g.relation(),

})

const Training_Class = g.model('Training_Class', {
  title: g.string().length({min: 5, max: 60}),
  description: g.string().length({min: 10, max: 200}),
  date_creation: g.datetime(),
  date_update: g.datetime(),
  date_delete: g.datetime(),
  status: g.boolean(),
  image: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})

enum Qualification_Type {
  gold,
  silver,
  bronze
}

const Qualification_Class = g.model('Qualification_Class', {
  title: g.string().length({min: 5, max: 60}),
  description: g.string().length({min: 10, max: 200}),
  //qualification_Type: Qualification_Type,
})


export default config({
  schema: g
  // Integrate Auth
  // https://grafbase.com/docs/auth
  // auth: {
  //   providers: [authProvider],
  //   rules: (rules) => {
  //     rules.private()
  //   }
  // }
})
