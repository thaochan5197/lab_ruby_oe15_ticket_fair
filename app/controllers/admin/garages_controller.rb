module Admin
  class GaragesController < Admin::BaseController
    def index
      @title = "Nhà xe"
      @garages = Garage.all
    end

    def new
      @garage = Garage.new
    end

    def create
      @garage = Garage.new garage_params

      if @garage.save
        flash[:success] = "Tạo mới nhà xe thành công"
        redirect_to admin_garages_path
      else
        flash.now[:danger] = "Không thể tạo mới nhà xe"
        render new_admin_garage_path
      end
    end

    private

    def garage_params
      params.require(:garage).permit :name, :phone_number, :address, :image,
        :info
    end
  end
end
