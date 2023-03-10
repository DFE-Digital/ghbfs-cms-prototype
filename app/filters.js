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

  filters.formatTableDate = function(dateString){
    return moment(dateString, "YYYY-MM-DD HH:mm").format("D MMM YYYY H:mma");
  }

  filters.daysAgo = function(num) {
      var d = moment().subtract(num,"days").format("D MMMM YYYY")
      if (d !== 'Invalid date') return d
      else return ''
  }

  // could be combined into a single filter, passing in the type
  filters.returnDay = function(date) {
    return date ? moment(date).date() : "";
  }

  filters.returnMonth = function(date) {
    return date ? (moment(date).month() + 1) : "";
  }

  filters.returnYear = function(date) {
    return date ? moment(date).year() : "";
  }


let statuses = {
  "new": {
    statusClass : "govuk-tag--green",
    statusUrl : "new-case"
  },
  "open": {
    statusClass : "govuk-tag--green",
    statusUrl : "in-progress-specify"
  },
  "Consultation booked": {
    statusClass : "govuk-tag--purple",
    statusUrl : "consultation-booked"
  },
  "resolved": {
    statusClass : "govuk-tag--green",
    statusUrl : "resolved-case"
  },
  "closed": {
    statusClass : "govuk-tag--grey",
    statusUrl : "close-case"
  },
  "Framework procurement": {
    statusClass : "govuk-tag--turquoise",
    statusUrl : "manage-procurement"
  },
  "Bespoke procurement": {
    statusClass : "govuk-tag--turquoise",
    statusUrl : "manage-procurement"
  },
  "action": {
    statusClass : "govuk-tag--red",
    statusUrl : "notification"
  },
  "on hold": {
    statusClass : "govuk-tag--blue",
    statusUrl : "on-hold-case"
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
