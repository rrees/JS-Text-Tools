
require.paths.unshift('spec', '/Users/rrees/.rvm/gems/ruby-1.9.1-p378/gems/jspec-4.3.2/lib', 'lib')
require('jspec')
require('unit/spec.helper')
require('yourlib')

JSpec
  .exec('spec/unit/spec.js')
  .run({ reporter: JSpec.reporters.Terminal, fixturePath: 'spec/fixtures', failuresOnly: true })
  .report()
