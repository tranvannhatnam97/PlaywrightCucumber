import { defineParameterType } from "@cucumber/cucumber";

export function defineParams() {
  defineParameterType({
    name: "url",
    regexp: /(http[^\"]*)/,
    transformer: (s) => new String(s),
  });
  defineParameterType({
    name: "action",
    regexp: /go to|click|enter/,
    transformer: (s) => new String(s),
  });
  defineParameterType({
    name: "element",
    regexp:
      /button *: *[^ ]+|input *: *[^ ]+|lable *: *[^ ]+|check *: *[^ ]+|radio button *: *[^ ]+|dropdown *: *[^ ]+/,
    transformer: (s) => new String(s),
  });
}
