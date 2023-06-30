import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20}),
  email: g.email().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  address: g.string().length({min: 5, max: 60}),
  TrainingClass: g.relation(() => TrainingClass).list().optional(),
})

const TrainingClass = g.model('TrainingClass', {
  title: g.string().length({min: 5, max: 60}),
  description: g.string().length({min: 10, max: 200}),
  dateCreation: g.datetime(),
  dateUpdate: g.datetime(),
  dateDelete: g.datetime(),
  status: g.boolean(),
  image: g.url(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
})
/*
enum QualificationType {
  gold,
  silver,
  bronze
}

const QualificationClass = g.model('QualificationClass', {
  title: g.string().length({min: 5, max: 60}),
  description: g.string().length({min: 10, max: 200}),
  //qualificationType: QualificationType,
})*/


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
