
describe 'TextTools'
  describe 'wordCount'
    it 'should correct count the number of simple words present'
      TextTools.wordCount("The beast beneath").should.eql 3
    end

	it 'should count commas as word seperators'
		TextTools.wordCount("Flow my tears, the policeman said").should.eql 6
	end
	
	it 'should count punctuation as word seperators'
		TextTools.wordCount("This is it!he cried.I can take it no longer;really!?Really").should.eql 13
	end
	
	it 'should not count punctuation at the end of the text as a word'
		TextTools.wordCount("What is going on?").should.eql 4
	end

	it 'should not count punctuation at the start of the text as a word'
		TextTools.wordCount(".  what now?").should.eql 2
	end

  end
end