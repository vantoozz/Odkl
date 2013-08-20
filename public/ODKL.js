if('undefined' != typeof ODKL){
    ODKL={};
}

ODKL={
    client_id: null,
    ready: false,

    loginCallback: function(){},

    init: function(params){
        if('object' != typeof params){
            return;
        }
        if('undefined' == typeof(params.client_id)){
            return;
        }
        ODKL.client_id=params.client_id;
        ODKL.ready=true;
    },

    login: function(params, loginCallback){
        if(!ODKL.ready){
            return;
        }
        if('object' != typeof params){
            return;
        }

        if('string' != typeof(params.base_url)){
            return;
        }

        var redirect_uri=params.base_url+'/odkl/auth';

        var scope='';
        if('string' == typeof(params.scope)){
            scope=params.scope;
        }

        if('function' == typeof loginCallback){
            ODKL.loginCallback=loginCallback;
        }

        window.open('http://www.odnoklassniki.ru/oauth/authorize?client_id='+ODKL.client_id+'&scope='+scope+'&response_type=code&redirect_uri='+redirect_uri,
                    'ODKL_LOGIN',
            'width=800,height=400,resizable=1').focus();
    }
}

