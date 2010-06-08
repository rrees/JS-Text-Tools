
describe 'TextTools'
  describe 'wordCount'
    it 'should correct count the number of simple words present'
      TextTools.wordCount("The beast beneath").should.eql 3
    end

	it 'should count commas as word seperators'
		TextTools.wordCount("Flow my tears, the policeman said").should.eql 6
	end
  end
end