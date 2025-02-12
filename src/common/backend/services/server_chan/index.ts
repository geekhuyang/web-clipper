import Service from './service';
import Form from './form';
import localeService from '@/common/locales';

export default () => {
  return {
    name: localeService.format({
      id: 'backend.services.server_chan.name',
      defaultMessage: 'ServerChan',
    }),
    icon: 'wechat',
    type: 'server_chan',
    service: Service,
    form: Form,
    homePage: 'https://sc.ftqq.com/',
  };
};
