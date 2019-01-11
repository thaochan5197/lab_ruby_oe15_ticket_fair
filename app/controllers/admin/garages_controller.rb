module Admin
  class GaragesController < Admin::BaseController
    before_action :find_garage, only: %i(edit update destroy)

    def index
      @title = "Nhà xe"
      @garages = Garage.all.page(params[:page]).per 10
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

    def edit; end

    def update
      if @garage.update garage_params
        flash[:success] = "Cập nhật thành công nhà xe: " + @garage.name
        redirect_to admin_garages_path
      else
        render :edit
      end
    end

    def destroy
      if @garage.destroy
        flash[:success] = "Xóa thành công Nhà xe: " + @garage.name
        redirect_to admin_garages_path
      else
        flash[:danger] = "Không thể xóa Nhà xe: " + @user.name
        render admin_garages_path
      end
    end

    private

    def find_garage
      @garage = Garage.find_by id: params[:id]

      return if @garage
      flash[:danger] = "Không thể xóa Nhà xe"
      redirect_to admin_garages_path
    end

    def garage_params
      params.require(:garage).permit :name, :phone_number, :address, :image,
        :info
    end
  end
end
