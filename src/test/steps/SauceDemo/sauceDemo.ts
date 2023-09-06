import { Given, When, Then } from "@cucumber/cucumber";
import { pageFixture } from "../../../hooks/pageFixture";
import { expect } from "@playwright/test";
import { queryDatabase } from "../../../commons/postgre";
