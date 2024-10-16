[
  (unpaired_comment)
  (paired_comment)
] @comment

[
  "{{"
  "}}"
  "{%"
  "%}"
  (end_paired_statement)
] @bracket

[
 (tag_name)
] @tag.framework

(variable_name) @identifier.variable
(filter_name) @tag.attribute.name
(filter_argument) @tag.attribute.value
(keyword) @keyword
(operator) @operator
(keyword_operator) @keyword.operator
(number) @value.number
(boolean) @value.boolean
(string) @string