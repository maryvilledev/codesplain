let collapse = require('../app/finalizers.js').collapse;

module.exports = {
    'language': 'ICalendar',
    'grammar_file': 'ICalendar.g4',
    'entry_rule': 'parse',
    'rules': {
        'parse': {
            'finalizers': [
                collapse
            ]
        },
        'icalstream': {
            'finalizers': [
                collapse
            ]
        },
        'icalobject': {
            'finalizers': [
                collapse
            ]
        },
        'calprop': {
            'finalizers': [
                collapse
            ]
        },
        'calscale': {
            'finalizers': [
                collapse
            ]
        },
        'method': {
            'finalizers': [
                collapse
            ]
        },
        'prodid': {
            'finalizers': [
                collapse
            ]
        },
        'version': {
            'finalizers': [
                collapse
            ]
        },
        'vervalue': {
            'finalizers': [
                collapse
            ]
        },
        'component': {
            'finalizers': [
                collapse
            ]
        },
        'iana_comp': {
            'finalizers': [
                collapse
            ]
        },
        'x_comp': {
            'finalizers': [
                collapse
            ]
        },
        'contentline': {
            'finalizers': [
                collapse
            ]
        },
        'name': {
            'finalizers': [
                collapse
            ]
        },
        'value': {
            'finalizers': [
                collapse
            ]
        },
        'eventc': {
            'finalizers': [
                collapse
            ]
        },
        'todoc': {
            'finalizers': [
                collapse
            ]
        },
        'journalc': {
            'finalizers': [
                collapse
            ]
        },
        'freebusyc': {
            'finalizers': [
                collapse
            ]
        },
        'timezonec': {
            'finalizers': [
                collapse
            ]
        },
        'alarmc': {
            'finalizers': [
                collapse
            ]
        },
        'eventprop': {
            'finalizers': [
                collapse
            ]
        },
        'todoprop': {
            'finalizers': [
                collapse
            ]
        },
        'jourprop': {
            'finalizers': [
                collapse
            ]
        },
        'fbprop': {
            'finalizers': [
                collapse
            ]
        },
        'timezoneprop': {
            'finalizers': [
                collapse
            ]
        },
        'tzprop': {
            'finalizers': [
                collapse
            ]
        },
        'alarmprop': {
            'finalizers': [
                collapse
            ]
        },
        'standardc': {
            'finalizers': [
                collapse
            ]
        },
        'daylightc': {
            'finalizers': [
                collapse
            ]
        },
        'attach': {
            'finalizers': [
                collapse
            ]
        },
        'attachparam': {
            'finalizers': [
                collapse
            ]
        },
        'categories': {
            'finalizers': [
                collapse
            ]
        },
        'catparam': {
            'finalizers': [
                collapse
            ]
        },
        'clazz': {
            'finalizers': [
                collapse
            ]
        },
        'classvalue': {
            'finalizers': [
                collapse
            ]
        },
        'comment': {
            'finalizers': [
                collapse
            ]
        },
        'commparam': {
            'finalizers': [
                collapse
            ]
        },
        'description': {
            'finalizers': [
                collapse
            ]
        },
        'descparam': {
            'finalizers': [
                collapse
            ]
        },
        'geo': {
            'finalizers': [
                collapse
            ]
        },
        'geovalue': {
            'finalizers': [
                collapse
            ]
        },
        'location': {
            'finalizers': [
                collapse
            ]
        },
        'locparam': {
            'finalizers': [
                collapse
            ]
        },
        'percent': {
            'finalizers': [
                collapse
            ]
        },
        'priority': {
            'finalizers': [
                collapse
            ]
        },
        'priovalue': {
            'finalizers': [
                collapse
            ]
        },
        'resources': {
            'finalizers': [
                collapse
            ]
        },
        'resrcparam': {
            'finalizers': [
                collapse
            ]
        },
        'status': {
            'finalizers': [
                collapse
            ]
        },
        'statvalue': {
            'finalizers': [
                collapse
            ]
        },
        'statvalue_event': {
            'finalizers': [
                collapse
            ]
        },
        'statvalue_todo': {
            'finalizers': [
                collapse
            ]
        },
        'statvalue_jour': {
            'finalizers': [
                collapse
            ]
        },
        'summary': {
            'finalizers': [
                collapse
            ]
        },
        'summparam': {
            'finalizers': [
                collapse
            ]
        },
        'completed': {
            'finalizers': [
                collapse
            ]
        },
        'dtend': {
            'finalizers': [
                collapse
            ]
        },
        'dtendparam': {
            'finalizers': [
                collapse
            ]
        },
        'due': {
            'finalizers': [
                collapse
            ]
        },
        'dueparam': {
            'finalizers': [
                collapse
            ]
        },
        'dtstart': {
            'finalizers': [
                collapse
            ]
        },
        'dtstparam': {
            'finalizers': [
                collapse
            ]
        },
        'duration': {
            'finalizers': [
                collapse
            ]
        },
        'freebusy': {
            'finalizers': [
                collapse
            ]
        },
        'fbparam': {
            'finalizers': [
                collapse
            ]
        },
        'fbvalue': {
            'finalizers': [
                collapse
            ]
        },
        'transp': {
            'finalizers': [
                collapse
            ]
        },
        'transvalue': {
            'finalizers': [
                collapse
            ]
        },
        'tzid': {
            'finalizers': [
                collapse
            ]
        },
        'tzname': {
            'finalizers': [
                collapse
            ]
        },
        'tznparam': {
            'finalizers': [
                collapse
            ]
        },
        'tzoffsetfrom': {
            'finalizers': [
                collapse
            ]
        },
        'tzoffsetto': {
            'finalizers': [
                collapse
            ]
        },
        'tzurl': {
            'finalizers': [
                collapse
            ]
        },
        'attendee': {
            'finalizers': [
                collapse
            ]
        },
        'attparam': {
            'finalizers': [
                collapse
            ]
        },
        'contact': {
            'finalizers': [
                collapse
            ]
        },
        'contparam': {
            'finalizers': [
                collapse
            ]
        },
        'organizer': {
            'finalizers': [
                collapse
            ]
        },
        'orgparam': {
            'finalizers': [
                collapse
            ]
        },
        'recurid': {
            'finalizers': [
                collapse
            ]
        },
        'ridparam': {
            'finalizers': [
                collapse
            ]
        },
        'related': {
            'finalizers': [
                collapse
            ]
        },
        'relparam': {
            'finalizers': [
                collapse
            ]
        },
        'url': {
            'finalizers': [
                collapse
            ]
        },
        'uid': {
            'finalizers': [
                collapse
            ]
        },
        'exdate': {
            'finalizers': [
                collapse
            ]
        },
        'exdtparam': {
            'finalizers': [
                collapse
            ]
        },
        'rdate': {
            'finalizers': [
                collapse
            ]
        },
        'rdtparam': {
            'finalizers': [
                collapse
            ]
        },
        'rdtval': {
            'finalizers': [
                collapse
            ]
        },
        'date_time_date': {
            'finalizers': [
                collapse
            ]
        },
        'rrule': {
            'finalizers': [
                collapse
            ]
        },
        'action': {
            'finalizers': [
                collapse
            ]
        },
        'actionvalue': {
            'finalizers': [
                collapse
            ]
        },
        'repeat': {
            'finalizers': [
                collapse
            ]
        },
        'trigger': {
            'finalizers': [
                collapse
            ]
        },
        'trigrel': {
            'finalizers': [
                collapse
            ]
        },
        'trigabs': {
            'finalizers': [
                collapse
            ]
        },
        'created': {
            'finalizers': [
                collapse
            ]
        },
        'dtstamp': {
            'finalizers': [
                collapse
            ]
        },
        'last_mod': {
            'finalizers': [
                collapse
            ]
        },
        'seq': {
            'finalizers': [
                collapse
            ]
        },
        'iana_prop': {
            'finalizers': [
                collapse
            ]
        },
        'x_prop': {
            'finalizers': [
                collapse
            ]
        },
        'rstatus': {
            'finalizers': [
                collapse
            ]
        },
        'rstatparam': {
            'finalizers': [
                collapse
            ]
        },
        'statcode': {
            'finalizers': [
                collapse
            ]
        },
        'param_name': {
            'finalizers': [
                collapse
            ]
        },
        'param_value': {
            'finalizers': [
                collapse
            ]
        },
        'paramtext': {
            'finalizers': [
                collapse
            ]
        },
        'quoted_string': {
            'finalizers': [
                collapse
            ]
        },
        'iana_token': {
            'finalizers': [
                collapse
            ]
        },
        'icalparameter': {
            'finalizers': [
                collapse
            ]
        },
        'altrepparam': {
            'finalizers': [
                collapse
            ]
        },
        'cnparam': {
            'finalizers': [
                collapse
            ]
        },
        'cutypeparam': {
            'finalizers': [
                collapse
            ]
        },
        'delfromparam': {
            'finalizers': [
                collapse
            ]
        },
        'deltoparam': {
            'finalizers': [
                collapse
            ]
        },
        'dirparam': {
            'finalizers': [
                collapse
            ]
        },
        'encodingparam': {
            'finalizers': [
                collapse
            ]
        },
        'fmttypeparam': {
            'finalizers': [
                collapse
            ]
        },
        'fbtypeparam': {
            'finalizers': [
                collapse
            ]
        },
        'languageparam': {
            'finalizers': [
                collapse
            ]
        },
        'memberparam': {
            'finalizers': [
                collapse
            ]
        },
        'partstatparam': {
            'finalizers': [
                collapse
            ]
        },
        'rangeparam': {
            'finalizers': [
                collapse
            ]
        },
        'trigrelparam': {
            'finalizers': [
                collapse
            ]
        },
        'reltypeparam': {
            'finalizers': [
                collapse
            ]
        },
        'roleparam': {
            'finalizers': [
                collapse
            ]
        },
        'rsvpparam': {
            'finalizers': [
                collapse
            ]
        },
        'sentbyparam': {
            'finalizers': [
                collapse
            ]
        },
        'tzidparam': {
            'finalizers': [
                collapse
            ]
        },
        'valuetypeparam': {
            'finalizers': [
                collapse
            ]
        },
        'valuetype': {
            'finalizers': [
                collapse
            ]
        },
        'binary': {
            'finalizers': [
                collapse
            ]
        },
        'b_chars': {
            'finalizers': [
                collapse
            ]
        },
        'b_end': {
            'finalizers': [
                collapse
            ]
        },
        'bool': {
            'finalizers': [
                collapse
            ]
        },
        'cal_address': {
            'finalizers': [
                collapse
            ]
        },
        'date': {
            'finalizers': [
                collapse
            ]
        },
        'date_time': {
            'finalizers': [
                collapse
            ]
        },
        'dur_value': {
            'finalizers': [
                collapse
            ]
        },
        'float_num': {
            'finalizers': [
                collapse
            ]
        },
        'digits': {
            'finalizers': [
                collapse
            ]
        },
        'integer': {
            'finalizers': [
                collapse
            ]
        },
        'period': {
            'finalizers': [
                collapse
            ]
        },
        'recur': {
            'finalizers': [
                collapse
            ]
        },
        'text': {
            'finalizers': [
                collapse
            ]
        },
        'time': {
            'finalizers': [
                collapse
            ]
        },
        'uri': {
            'finalizers': [
                collapse
            ]
        },
        'utc_offset': {
            'finalizers': [
                collapse
            ]
        },
        'other_param': {
            'finalizers': [
                collapse
            ]
        },
        'iana_param': {
            'finalizers': [
                collapse
            ]
        },
        'x_param': {
            'finalizers': [
                collapse
            ]
        },
        'type_name': {
            'finalizers': [
                collapse
            ]
        },
        'subtype_name': {
            'finalizers': [
                collapse
            ]
        },
        'reg_name': {
            'finalizers': [
                collapse
            ]
        },
        'language': {
            'finalizers': [
                collapse
            ]
        },
        'partstat_event': {
            'finalizers': [
                collapse
            ]
        },
        'partstat_todo': {
            'finalizers': [
                collapse
            ]
        },
        'partstat_jour': {
            'finalizers': [
                collapse
            ]
        },
        'b_char': {
            'finalizers': [
                collapse
            ]
        },
        'date_value': {
            'finalizers': [
                collapse
            ]
        },
        'date_fullyear': {
            'finalizers': [
                collapse
            ]
        },
        'date_month': {
            'finalizers': [
                collapse
            ]
        },
        'date_mday': {
            'finalizers': [
                collapse
            ]
        },
        'time_hour': {
            'finalizers': [
                collapse
            ]
        },
        'time_minute': {
            'finalizers': [
                collapse
            ]
        },
        'time_second': {
            'finalizers': [
                collapse
            ]
        },
        'dur_date': {
            'finalizers': [
                collapse
            ]
        },
        'dur_day': {
            'finalizers': [
                collapse
            ]
        },
        'dur_time': {
            'finalizers': [
                collapse
            ]
        },
        'dur_week': {
            'finalizers': [
                collapse
            ]
        },
        'dur_hour': {
            'finalizers': [
                collapse
            ]
        },
        'dur_minute': {
            'finalizers': [
                collapse
            ]
        },
        'dur_second': {
            'finalizers': [
                collapse
            ]
        },
        'period_explicit': {
            'finalizers': [
                collapse
            ]
        },
        'period_start': {
            'finalizers': [
                collapse
            ]
        },
        'recur_rule_part': {
            'finalizers': [
                collapse
            ]
        },
        'freq': {
            'finalizers': [
                collapse
            ]
        },
        'enddate': {
            'finalizers': [
                collapse
            ]
        },
        'count': {
            'finalizers': [
                collapse
            ]
        },
        'interval': {
            'finalizers': [
                collapse
            ]
        },
        'byseclist': {
            'finalizers': [
                collapse
            ]
        },
        'byminlist': {
            'finalizers': [
                collapse
            ]
        },
        'byhrlist': {
            'finalizers': [
                collapse
            ]
        },
        'bywdaylist': {
            'finalizers': [
                collapse
            ]
        },
        'weekdaynum': {
            'finalizers': [
                collapse
            ]
        },
        'weekday': {
            'finalizers': [
                collapse
            ]
        },
        'bymodaylist': {
            'finalizers': [
                collapse
            ]
        },
        'monthdaynum': {
            'finalizers': [
                collapse
            ]
        },
        'byyrdaylist': {
            'finalizers': [
                collapse
            ]
        },
        'yeardaynum': {
            'finalizers': [
                collapse
            ]
        },
        'ordyrday': {
            'finalizers': [
                collapse
            ]
        },
        'bywknolist': {
            'finalizers': [
                collapse
            ]
        },
        'weeknum': {
            'finalizers': [
                collapse
            ]
        },
        'bymolist': {
            'finalizers': [
                collapse
            ]
        },
        'bysplist': {
            'finalizers': [
                collapse
            ]
        },
        'digits_2': {
            'finalizers': [
                collapse
            ]
        },
        'digits_1_2': {
            'finalizers': [
                collapse
            ]
        },
        'safe_char': {
            'finalizers': [
                collapse
            ]
        },
        'value_char': {
            'finalizers': [
                collapse
            ]
        },
        'qsafe_char': {
            'finalizers': [
                collapse
            ]
        },
        'tsafe_char': {
            'finalizers': [
                collapse
            ]
        },
        'time_numzone': {
            'finalizers': [
                collapse
            ]
        },
        'reg_name_char': {
            'finalizers': [
                collapse
            ]
        },
        'language_char': {
            'finalizers': [
                collapse
            ]
        },
        'x_name': {
            'finalizers': [
                collapse
            ]
        },
        'alpha_num': {
            'finalizers': [
                collapse
            ]
        },
        'digit': {
            'finalizers': [
                collapse
            ]
        },
        'alpha': {
            'finalizers': [
                collapse
            ]
        },
        'k_accepted': {
            'finalizers': [
                collapse
            ]
        },
        'k_action': {
            'finalizers': [
                collapse
            ]
        },
        'k_address': {
            'finalizers': [
                collapse
            ]
        },
        'k_altrep': {
            'finalizers': [
                collapse
            ]
        },
        'k_attach': {
            'finalizers': [
                collapse
            ]
        },
        'k_attendee': {
            'finalizers': [
                collapse
            ]
        },
        'k_audio': {
            'finalizers': [
                collapse
            ]
        },
        'k_base': {
            'finalizers': [
                collapse
            ]
        },
        'k_begin': {
            'finalizers': [
                collapse
            ]
        },
        'k_binary': {
            'finalizers': [
                collapse
            ]
        },
        'k_bit': {
            'finalizers': [
                collapse
            ]
        },
        'k_boolean': {
            'finalizers': [
                collapse
            ]
        },
        'k_busy': {
            'finalizers': [
                collapse
            ]
        },
        'k_busy_unavailable': {
            'finalizers': [
                collapse
            ]
        },
        'k_busy_tentative': {
            'finalizers': [
                collapse
            ]
        },
        'k_byday': {
            'finalizers': [
                collapse
            ]
        },
        'k_byhour': {
            'finalizers': [
                collapse
            ]
        },
        'k_byminute': {
            'finalizers': [
                collapse
            ]
        },
        'k_bymonth': {
            'finalizers': [
                collapse
            ]
        },
        'k_bymonthday': {
            'finalizers': [
                collapse
            ]
        },
        'k_bysecond': {
            'finalizers': [
                collapse
            ]
        },
        'k_bysetpos': {
            'finalizers': [
                collapse
            ]
        },
        'k_byweekno': {
            'finalizers': [
                collapse
            ]
        },
        'k_byyearday': {
            'finalizers': [
                collapse
            ]
        },
        'k_cal_address': {
            'finalizers': [
                collapse
            ]
        },
        'k_calscale': {
            'finalizers': [
                collapse
            ]
        },
        'k_cancelled': {
            'finalizers': [
                collapse
            ]
        },
        'k_categories': {
            'finalizers': [
                collapse
            ]
        },
        'k_chair': {
            'finalizers': [
                collapse
            ]
        },
        'k_child': {
            'finalizers': [
                collapse
            ]
        },
        'k_class': {
            'finalizers': [
                collapse
            ]
        },
        'k_cn': {
            'finalizers': [
                collapse
            ]
        },
        'k_comment': {
            'finalizers': [
                collapse
            ]
        },
        'k_completed': {
            'finalizers': [
                collapse
            ]
        },
        'k_confidential': {
            'finalizers': [
                collapse
            ]
        },
        'k_confirmed': {
            'finalizers': [
                collapse
            ]
        },
        'k_contact': {
            'finalizers': [
                collapse
            ]
        },
        'k_count': {
            'finalizers': [
                collapse
            ]
        },
        'k_created': {
            'finalizers': [
                collapse
            ]
        },
        'k_cutype': {
            'finalizers': [
                collapse
            ]
        },
        'k_daily': {
            'finalizers': [
                collapse
            ]
        },
        'k_date': {
            'finalizers': [
                collapse
            ]
        },
        'k_date_time': {
            'finalizers': [
                collapse
            ]
        },
        'k_daylight': {
            'finalizers': [
                collapse
            ]
        },
        'k_declined': {
            'finalizers': [
                collapse
            ]
        },
        'k_delegated': {
            'finalizers': [
                collapse
            ]
        },
        'k_delegated_from': {
            'finalizers': [
                collapse
            ]
        },
        'k_delegated_to': {
            'finalizers': [
                collapse
            ]
        },
        'k_description': {
            'finalizers': [
                collapse
            ]
        },
        'k_dir': {
            'finalizers': [
                collapse
            ]
        },
        'k_display': {
            'finalizers': [
                collapse
            ]
        },
        'k_draft': {
            'finalizers': [
                collapse
            ]
        },
        'k_dtend': {
            'finalizers': [
                collapse
            ]
        },
        'k_dtstamp': {
            'finalizers': [
                collapse
            ]
        },
        'k_dtstart': {
            'finalizers': [
                collapse
            ]
        },
        'k_due': {
            'finalizers': [
                collapse
            ]
        },
        'k_duration': {
            'finalizers': [
                collapse
            ]
        },
        'k_email': {
            'finalizers': [
                collapse
            ]
        },
        'k_encoding': {
            'finalizers': [
                collapse
            ]
        },
        'k_end': {
            'finalizers': [
                collapse
            ]
        },
        'k_exdate': {
            'finalizers': [
                collapse
            ]
        },
        'k_false': {
            'finalizers': [
                collapse
            ]
        },
        'k_fbtype': {
            'finalizers': [
                collapse
            ]
        },
        'k_final': {
            'finalizers': [
                collapse
            ]
        },
        'k_float': {
            'finalizers': [
                collapse
            ]
        },
        'k_fmttype': {
            'finalizers': [
                collapse
            ]
        },
        'k_fr': {
            'finalizers': [
                collapse
            ]
        },
        'k_free': {
            'finalizers': [
                collapse
            ]
        },
        'k_freebusy': {
            'finalizers': [
                collapse
            ]
        },
        'k_freq': {
            'finalizers': [
                collapse
            ]
        },
        'k_geo': {
            'finalizers': [
                collapse
            ]
        },
        'k_gregorian': {
            'finalizers': [
                collapse
            ]
        },
        'k_group': {
            'finalizers': [
                collapse
            ]
        },
        'k_hourly': {
            'finalizers': [
                collapse
            ]
        },
        'k_in_progress': {
            'finalizers': [
                collapse
            ]
        },
        'k_individual': {
            'finalizers': [
                collapse
            ]
        },
        'k_integer': {
            'finalizers': [
                collapse
            ]
        },
        'k_interval': {
            'finalizers': [
                collapse
            ]
        },
        'k_language': {
            'finalizers': [
                collapse
            ]
        },
        'k_last_modified': {
            'finalizers': [
                collapse
            ]
        },
        'k_location': {
            'finalizers': [
                collapse
            ]
        },
        'k_member': {
            'finalizers': [
                collapse
            ]
        },
        'k_method': {
            'finalizers': [
                collapse
            ]
        },
        'k_minutely': {
            'finalizers': [
                collapse
            ]
        },
        'k_mo': {
            'finalizers': [
                collapse
            ]
        },
        'k_monthly': {
            'finalizers': [
                collapse
            ]
        },
        'k_needs_action': {
            'finalizers': [
                collapse
            ]
        },
        'k_non_participant': {
            'finalizers': [
                collapse
            ]
        },
        'k_opaque': {
            'finalizers': [
                collapse
            ]
        },
        'k_opt_participant': {
            'finalizers': [
                collapse
            ]
        },
        'k_organizer': {
            'finalizers': [
                collapse
            ]
        },
        'k_parent': {
            'finalizers': [
                collapse
            ]
        },
        'k_participant': {
            'finalizers': [
                collapse
            ]
        },
        'k_partstat': {
            'finalizers': [
                collapse
            ]
        },
        'k_percent_complete': {
            'finalizers': [
                collapse
            ]
        },
        'k_period': {
            'finalizers': [
                collapse
            ]
        },
        'k_priority': {
            'finalizers': [
                collapse
            ]
        },
        'k_private': {
            'finalizers': [
                collapse
            ]
        },
        'k_process': {
            'finalizers': [
                collapse
            ]
        },
        'k_prodid': {
            'finalizers': [
                collapse
            ]
        },
        'k_public': {
            'finalizers': [
                collapse
            ]
        },
        'k_range': {
            'finalizers': [
                collapse
            ]
        },
        'k_rdate': {
            'finalizers': [
                collapse
            ]
        },
        'k_recur': {
            'finalizers': [
                collapse
            ]
        },
        'k_recurrence_id': {
            'finalizers': [
                collapse
            ]
        },
        'k_relat': {
            'finalizers': [
                collapse
            ]
        },
        'k_related': {
            'finalizers': [
                collapse
            ]
        },
        'k_related_to': {
            'finalizers': [
                collapse
            ]
        },
        'k_reltype': {
            'finalizers': [
                collapse
            ]
        },
        'k_repeat': {
            'finalizers': [
                collapse
            ]
        },
        'k_req_participant': {
            'finalizers': [
                collapse
            ]
        },
        'k_request_status': {
            'finalizers': [
                collapse
            ]
        },
        'k_resource': {
            'finalizers': [
                collapse
            ]
        },
        'k_resources': {
            'finalizers': [
                collapse
            ]
        },
        'k_role': {
            'finalizers': [
                collapse
            ]
        },
        'k_room': {
            'finalizers': [
                collapse
            ]
        },
        'k_rrule': {
            'finalizers': [
                collapse
            ]
        },
        'k_rsvp': {
            'finalizers': [
                collapse
            ]
        },
        'k_sa': {
            'finalizers': [
                collapse
            ]
        },
        'k_secondly': {
            'finalizers': [
                collapse
            ]
        },
        'k_sent_by': {
            'finalizers': [
                collapse
            ]
        },
        'k_sequence': {
            'finalizers': [
                collapse
            ]
        },
        'k_sibling': {
            'finalizers': [
                collapse
            ]
        },
        'k_standard': {
            'finalizers': [
                collapse
            ]
        },
        'k_start': {
            'finalizers': [
                collapse
            ]
        },
        'k_status': {
            'finalizers': [
                collapse
            ]
        },
        'k_su': {
            'finalizers': [
                collapse
            ]
        },
        'k_summary': {
            'finalizers': [
                collapse
            ]
        },
        'k_tentative': {
            'finalizers': [
                collapse
            ]
        },
        'k_text': {
            'finalizers': [
                collapse
            ]
        },
        'k_th': {
            'finalizers': [
                collapse
            ]
        },
        'k_thisandfuture': {
            'finalizers': [
                collapse
            ]
        },
        'k_time': {
            'finalizers': [
                collapse
            ]
        },
        'k_transp': {
            'finalizers': [
                collapse
            ]
        },
        'k_transparent': {
            'finalizers': [
                collapse
            ]
        },
        'k_trigger': {
            'finalizers': [
                collapse
            ]
        },
        'k_true': {
            'finalizers': [
                collapse
            ]
        },
        'k_tu': {
            'finalizers': [
                collapse
            ]
        },
        'k_tzid': {
            'finalizers': [
                collapse
            ]
        },
        'k_tzname': {
            'finalizers': [
                collapse
            ]
        },
        'k_tzoffsetfrom': {
            'finalizers': [
                collapse
            ]
        },
        'k_tzoffsetto': {
            'finalizers': [
                collapse
            ]
        },
        'k_tzurl': {
            'finalizers': [
                collapse
            ]
        },
        'k_uid': {
            'finalizers': [
                collapse
            ]
        },
        'k_unknown': {
            'finalizers': [
                collapse
            ]
        },
        'k_until': {
            'finalizers': [
                collapse
            ]
        },
        'k_uri': {
            'finalizers': [
                collapse
            ]
        },
        'k_url': {
            'finalizers': [
                collapse
            ]
        },
        'k_utc_offset': {
            'finalizers': [
                collapse
            ]
        },
        'k_valarm': {
            'finalizers': [
                collapse
            ]
        },
        'k_value': {
            'finalizers': [
                collapse
            ]
        },
        'k_vcalendar': {
            'finalizers': [
                collapse
            ]
        },
        'k_version': {
            'finalizers': [
                collapse
            ]
        },
        'k_vevent': {
            'finalizers': [
                collapse
            ]
        },
        'k_vfreebusy': {
            'finalizers': [
                collapse
            ]
        },
        'k_vjournal': {
            'finalizers': [
                collapse
            ]
        },
        'k_vtimezone': {
            'finalizers': [
                collapse
            ]
        },
        'k_vtodo': {
            'finalizers': [
                collapse
            ]
        },
        'k_we': {
            'finalizers': [
                collapse
            ]
        },
        'k_weekly': {
            'finalizers': [
                collapse
            ]
        },
        'k_wkst': {
            'finalizers': [
                collapse
            ]
        },
        'k_yearly': {
            'finalizers': [
                collapse
            ]
        }
    }
};
