const moment = require("moment")


module.exports = function (env) {
  /**
   * Instantiate object used to store the methods registered as a
   * 'filter' (of the same name) within nunjucks. You can override
   * gov.uk core filters by creating filter methods of the same name.
   * @type {Object}
   */
  var filters = {}

  /* ------------------------------------------------------------------
    add your methods to the filters obj below this comment block:
    @example:

    filters.sayHi = function(name) {
        return 'Hi ' + name + '!'
    }

    Which in your templates would be used as:

    {{ 'Paul' | sayHi }} => 'Hi Paul'

    Notice the first argument of your filters method is whatever
    gets 'piped' via '|' to the filter.

    Filters can take additional arguments, for example:

    filters.sayHi = function(name,tone) {
      return (tone == 'formal' ? 'Greetings' : 'Hi') + ' ' + name + '!'
    }

    Which would be used like this:

    {{ 'Joel' | sayHi('formal') }} => 'Greetings Joel!'
    {{ 'Gemma' | sayHi }} => 'Hi Gemma!'

    For more on filters and how to write them see the Nunjucks
    documentation.

  ------------------------------------------------------------------ */

  /* ------------------------------------------------------------------
    keep the following line to return your filters to the app
  ------------------------------------------------------------------ */



  filters.formatWithComma = function(str){
    if(!str) {
      return ''
    } else {
      return str + ","
    }
  }

  filters.formatDate = function(dateString){
    return moment(dateString, "YYYY-MM-DD").format("D MMMM YYYY");
  }

  filters.daysAgo = function(num) {
      var d = moment().subtract(num,"days").format("D MMMM YYYY")
      if (d !== 'Invalid date') return d
      else return ''
  }


let statuses = {
  "new": {
    statusClass : "govuk-tag--blue",
    statusUrl : "new-case"
  },
  "Open": {
    statusClass : "govuk-tag--blue",
    statusUrl : "in-progress-specify"
  },
  "Consultation booked": {
    statusClass : "govuk-tag--purple",
    statusUrl : "consultation-booked"
  },
  "closed": {
    statusClass : "govuk-tag--grey",
    statusUrl : "closed-case"
  },
  "Framework procurement": {
    statusClass : "govuk-tag--turquoise",
    statusUrl : "manage-procurement"
  },
  "Bespoke procurement": {
    statusClass : "govuk-tag--turquoise",
    statusUrl : "manage-procurement"
  }
}


  filters.formatCaseTagColour = function(str){
    return statuses[str].statusClass;
  }

  filters.formatCaseListUrl = function(str){
    return statuses[str].statusUrl;
  }

  return filters
}
