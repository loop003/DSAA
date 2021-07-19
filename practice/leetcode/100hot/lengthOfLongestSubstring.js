var lengthOfLongestSubstring = function(s) {
  const preMap = {}
  let len = 0, pre = -1
  for (let i=0; i<s.length; i++) {
      const val = preMap[s[i]]
      if (val!==undefined) {
          if (val > pre) {
              pre = val
          }
      }
      const cur = i - pre
      len = len < cur ? cur : len
      preMap[s[i]] = i
  }
  console.log(len)
  return len
};
lengthOfLongestSubstring(" ")