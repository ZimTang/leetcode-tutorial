import revertByWord from '../../code/string/lesson1'

test('reverByWord:"Let\'s take LeetCode contest"',() => {
  expect(revertByWord("Let's take LeetCode contest")).toBe("s'teL ekat edoCteeL tsetnoc")
})